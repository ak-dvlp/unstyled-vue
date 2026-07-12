import fg from 'fast-glob'
import path from 'path'
import { type FunctionDeclaration, Project, SyntaxKind, type VariableDeclaration } from 'ts-morph'
import { fileURLToPath } from 'url'

export interface ComposableArgument {
  name: string
  type: string
}

export interface ReturnPropertyDoc {
  description_en: string
  description_ru: string
  name: string
  type: string
}

export interface ComposableItem {
  arguments: ComposableArgument[]
  description_en: string
  description_ru: string
  name: string
  returns: string
  returns_properties: ReturnPropertyDoc[]
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

declare const data: Record<string, ComposableItem[]>
export { data }

function cleanTypeScriptType(typeString: string): string {
  return typeString.replace(/import\((['"`]).*?\1\)\./g, '')
}

function parseFunctionNode(node: FunctionDeclaration | VariableDeclaration): ComposableItem {
  let name = ''
  let args: { name: string; type: string }[] = []
  let returnType = 'void'
  let functionBodyNode = null

  if (node.getKind() === SyntaxKind.FunctionDeclaration) {
    const func = node as FunctionDeclaration
    name = func.getName() || 'anonymous'
    returnType = cleanTypeScriptType(func.getReturnType().getText())

    args = func.getParameters().map((p) => ({
      name: p.getName(),
      type: cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText()),
    }))

    functionBodyNode = func
  } else if (node.getKind() === SyntaxKind.VariableDeclaration) {
    const varDecl = node as VariableDeclaration
    name = varDecl.getName()
    returnType = cleanTypeScriptType(varDecl.getType().getText())

    const initializer = varDecl.getInitializer()

    if (
      initializer &&
      (initializer.getKind() === SyntaxKind.ArrowFunction || initializer.getKind() === SyntaxKind.FunctionExpression)
    ) {
      const funcExpr = initializer

      args = funcExpr.getParameters().map((p: any) => ({
        name: p.getName(),
        type: cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText()),
      }))

      returnType = cleanTypeScriptType(funcExpr.getReturnType().getText())
      functionBodyNode = funcExpr
    }
  }

  const jsDocs = (node as any).getJsDocs?.() || []
  const jsDoc = jsDocs[0]

  const ruText =
    jsDoc
      ?.getTags()
      .find((t: any) => t.getTagName() === 'ru')
      ?.getCommentText() || ''

  const enText =
    jsDoc
      ?.getTags()
      .find((t: any) => t.getTagName() === 'en')
      ?.getCommentText() || ''

  const returnsProperties: ReturnPropertyDoc[] = []

  if (functionBodyNode) {
    const innerFunctions = functionBodyNode.getFunctions ? functionBodyNode.getFunctions() : []
    const innerVariables = functionBodyNode.getVariableDeclarations ? functionBodyNode.getVariableDeclarations() : []

    const allInnerElements = [...innerFunctions, ...innerVariables]

    for (const element of allInnerElements) {
      const elementName = element.getName()

      if (!elementName) continue

      const innerJsDocs = (element as any).getJsDocs?.() || []

      if (innerJsDocs.length > 0) {
        const innerDoc = innerJsDocs[0]

        const innerRu =
          innerDoc
            .getTags()
            .find((t: any) => t.getTagName() === 'ru')
            ?.getCommentText() || ''

        const innerEn =
          innerDoc
            .getTags()
            .find((t: any) => t.getTagName() === 'en')
            ?.getCommentText() || ''

        if (innerRu || innerEn) {
          let propertyType = 'unknown'

          if (element.getKind() === SyntaxKind.FunctionDeclaration) {
            const funcElement = element as FunctionDeclaration

            const innerArgs = funcElement
              .getParameters()
              .map((p) => {
                const pType = cleanTypeScriptType(p.getTypeNode()?.getText() || p.getType().getText())
                return `${p.getName()}: ${pType}`
              })
              .join(', ')

            const innerReturn = cleanTypeScriptType(funcElement.getReturnType().getText())
            propertyType = `(${innerArgs}) => ${innerReturn}`
          } else {
            propertyType = cleanTypeScriptType(element.getType().getText())
          }

          returnsProperties.push({
            name: elementName,
            type: propertyType,
            description_en: typeof innerEn === 'string' ? innerEn.trim() : 'No description provided',
            description_ru: typeof innerRu === 'string' ? innerRu.trim() : 'Описание отсутствует',
          })
        }
      }
    }
  }

  return {
    name,
    arguments: args,
    returns: returnType,
    description_en: typeof enText === 'string' ? enText.trim() : 'No description provided',
    description_ru: typeof ruText === 'string' ? ruText.trim() : 'Описание отсутствует',
    returns_properties: returnsProperties,
  }
}

export default {
  load() {
    const project = new Project()
    const allComposables: Record<string, ComposableItem[]> = {}

    const composableFiles = fg.globSync(path.resolve(__dirname, '../src/composables/**/*.ts'))
    const sharedTypes = fg.globSync(path.resolve(__dirname, '../src/types/**/*.ts'))

    if (sharedTypes.length > 0) {
      project.addSourceFilesAtPaths(sharedTypes)
    }

    if (composableFiles.length > 0) {
      project.addSourceFilesAtPaths(composableFiles)
    }

    for (const filePath of composableFiles) {
      const sourceFile = project.getSourceFile(filePath)
      if (!sourceFile) continue

      const fileName = path.basename(filePath, '.ts')
      const extractedItems: ComposableItem[] = []

      const exportedFunctions = sourceFile.getFunctions().filter((f) => f.isExported())
      for (const func of exportedFunctions) {
        extractedItems.push(parseFunctionNode(func))
      }

      const variableStatements = sourceFile.getVariableStatements().filter((v) => v.isExported())
      for (const statement of variableStatements) {
        for (const declaration of statement.getDeclarations()) {
          extractedItems.push(parseFunctionNode(declaration))
        }
      }

      if (extractedItems.length > 0) {
        allComposables[fileName] = extractedItems
      }
    }

    return allComposables
  },
}
