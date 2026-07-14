import fg from 'fast-glob'
import path from 'path'
import { type FunctionDeclaration, Project, SyntaxKind, type VariableDeclaration } from 'ts-morph'
import { fileURLToPath } from 'url'

import type { ComposableData } from './types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

declare const data: Record<string, ComposableData>
export { data }

function cleanTypeScriptType(typeString: string) {
  return typeString.replace(/import\((['"`]).*?\1\)\./g, '')
}

function cleanDescriptionText(text: string) {
  return text
    .replace(/^\s*\*+/gm, '')
    .replace(/^- /, '')
    .trim()
}

function parseMixedJsDoc(jsDocText: string) {
  const result = {
    main: { en: '', ru: '' },
    params: new Map<string, { en: string; ru: string }>(),
  }

  const ruSectionMatch = jsDocText.match(/@ru([\s\S]*?)(?=@en|$)/)
  const enSectionMatch = jsDocText.match(/@en([\s\S]*?)(?=@ru|$)/)

  const ruSection = ruSectionMatch ? ruSectionMatch[1] : ''
  const enSection = enSectionMatch ? enSectionMatch[1] : ''

  const parseSection = (sectionText: string, lang: 'en' | 'ru') => {
    if (!sectionText.trim()) return

    const mainParts = sectionText.split(/@param|@returns/)
    const mainMatch = mainParts ? mainParts[0] : ''

    result.main[lang] = cleanDescriptionText(mainMatch)
      .replace(/[\/\*]+$/, '')
      .trim()

    const paramRegex = /@param\s+(\w+)\s*(?:-\s*)?([\s\S]*?)(?=@param|@returns|\*\/|\/|$)/g

    let match

    while ((match = paramRegex.exec(sectionText)) !== null) {
      const pName = match[1]
      const pDesc = match[2]
        ? cleanDescriptionText(match[2])
            .replace(/[\/\*]+$/, '')
            .trim()
        : ''

      if (!result.params.has(pName)) {
        result.params.set(pName, { en: '', ru: '' })
      }

      result.params.get(pName)![lang] = pDesc
    }
  }

  parseSection(ruSection, 'ru')
  parseSection(enSection, 'en')

  return result
}

function parseFunctionNode(node: FunctionDeclaration | VariableDeclaration) {
  let name = ''
  let params: any[] = []
  let functionBodyNode = null

  const jsDocs = (node as any).getJsDocs?.() || []
  const jsDoc = jsDocs[0]

  const jsDocText = jsDoc ? jsDoc.getText() : ''
  const parsedDoc = parseMixedJsDoc(jsDocText)

  if (node.getKind() === SyntaxKind.FunctionDeclaration) {
    const func = node as FunctionDeclaration
    name = func.getName() || 'anonymous'
    functionBodyNode = func

    params = func.getParameters().map((p) => {
      const pName = p.getName()

      return {
        name: pName,
        type: cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText()),
        description: parsedDoc.params.get(pName) || { en: '', ru: '' },
      }
    })
  } else if (node.getKind() === SyntaxKind.VariableDeclaration) {
    const varDecl = node as VariableDeclaration
    name = varDecl.getName()

    const initializer = varDecl.getInitializer()

    if (
      initializer &&
      (initializer.getKind() === SyntaxKind.ArrowFunction || initializer.getKind() === SyntaxKind.FunctionExpression)
    ) {
      const funcExpr = initializer as any
      functionBodyNode = funcExpr

      params = funcExpr.getParameters().map((p: any) => {
        const pName = p.getName()

        return {
          name: pName,
          type: cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText()),
          description: parsedDoc.params.get(pName) || { en: '', ru: '' },
        }
      })
    }
  }

  const returnsProperties: any[] = []

  if (functionBodyNode) {
    const innerFunctions = functionBodyNode.getFunctions ? functionBodyNode.getFunctions() : []
    const innerVariables = functionBodyNode.getVariableDeclarations ? functionBodyNode.getVariableDeclarations() : []
    const allInnerElements = [...innerFunctions, ...innerVariables]

    for (const element of allInnerElements) {
      const elementName = element.getName()
      if (!elementName) continue

      let targetDocNode = element

      if (element.getKind() === SyntaxKind.VariableDeclaration) {
        const varStatement = element.getFirstAncestorByKind(SyntaxKind.VariableStatement)

        if (varStatement) {
          targetDocNode = varStatement
        }
      }

      const innerJsDocs = (targetDocNode as any).getJsDocs?.() || []
      const innerDoc = innerJsDocs[0]

      if (innerDoc) {
        const innerDocText = innerDoc.getText()
        const parsedInnerDoc = parseMixedJsDoc(innerDocText)

        if (parsedInnerDoc.main.en || parsedInnerDoc.main.ru) {
          const item: any = {
            name: elementName,
            description: parsedInnerDoc.main,
            parameters: [],
            type: 'computed',
          }

          if (element.getKind() === SyntaxKind.FunctionDeclaration) {
            const funcElement = element as FunctionDeclaration
            item.type = 'function'

            funcElement
              .getParameters()
              .map((p) => {
                const pName = p.getName()
                const pType = cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText())

                item.parameters.push({
                  name: pName,
                  type: pType,
                  description: parsedInnerDoc.params.get(pName) || { en: '', ru: '' },
                })

                return `${pName}: ${pType}`
              })
              .join(', ')

            const innerReturn = cleanTypeScriptType(funcElement.getReturnType().getText())
            item.returnValue = innerReturn
          } else if (element.getKind() === SyntaxKind.VariableDeclaration) {
            const varElement = element as VariableDeclaration
            const varType = cleanTypeScriptType(varElement.getType().getText())

            item.returnValue = varType
            const initializer = varElement.getInitializer()

            if (
              initializer &&
              (initializer.getKind() === SyntaxKind.ArrowFunction ||
                initializer.getKind() === SyntaxKind.FunctionExpression)
            ) {
              item.type = 'function'
            } else {
              item.type = 'computed'
            }
          }

          returnsProperties.push(item)
        }
      }
    }
  }

  return {
    name,
    description: parsedDoc.main,
    parameters: params,
    returns: returnsProperties,
  }
}

export default {
  load() {
    const project = new Project()
    const allComposables: Record<string, unknown> = {}

    const composableFiles = fg.globSync(path.resolve(__dirname, '../src/composables/**/*.ts'))
    const sharedTypes = fg.globSync(path.resolve(__dirname, '../src/types/**/*.ts'))

    if (sharedTypes.length > 0) project.addSourceFilesAtPaths(sharedTypes)
    if (composableFiles.length > 0) project.addSourceFilesAtPaths(composableFiles)

    for (const filePath of composableFiles) {
      const sourceFile = project.getSourceFile(filePath)

      if (!sourceFile) continue

      const fileName = path.basename(filePath, '.ts')
      const firstExportedFunc = sourceFile.getFunctions().find((f) => f.isExported())

      if (firstExportedFunc) {
        allComposables[fileName] = parseFunctionNode(firstExportedFunc)
        continue
      }

      const exportedVariables = sourceFile.getVariableStatements().filter((v) => v.isExported())

      for (const statement of exportedVariables) {
        const declaration = statement.getDeclarations()[0]

        if (declaration) {
          allComposables[fileName] = parseFunctionNode(declaration)
          break
        }
      }
    }

    return allComposables
  },
}
