import { parse } from '@vue/compiler-sfc'
import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'
import { type InterfaceDeclaration, Project, PropertySignature, SyntaxKind } from 'ts-morph'
import { fileURLToPath } from 'url'

import type { PropItem } from './types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

declare const data: Record<string, PropItem[]>
export { data }

/** Извлекает значения по умолчанию свойств компонента из АСД блока script однофайловых Vue-компонентов */
function getDefaultValues(content: string, project: Project): Record<string, string> {
  const defaults: Record<string, string> = {}

  const tempFile = project.createSourceFile('scratch_defaults.ts', content, { overwrite: true })

  const propsVarNames = new Set<string>()
  const varDeclarations = tempFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration)

  for (const varDecl of varDeclarations) {
    const initializer = varDecl.getInitializer()
    if (initializer && initializer.getKind() === SyntaxKind.CallExpression) {
      const callExpr = initializer.asKindOrThrow(SyntaxKind.CallExpression)
      if (callExpr.getExpression().getText() === 'defineProps') {
        const nameNode = varDecl.getNameNode()
        if (nameNode.getKind() === SyntaxKind.Identifier) {
          propsVarNames.add(nameNode.getText())
        }
      }
    }
  }

  for (const varDecl of varDeclarations) {
    const nameNode = varDecl.getNameNode()
    const initializer = varDecl.getInitializer()

    if (nameNode.getKind() !== SyntaxKind.ObjectBindingPattern || !initializer) {
      continue
    }

    let isDefinePropsDestructure = false

    if (initializer.getKind() === SyntaxKind.CallExpression) {
      const callExpr = initializer.asKindOrThrow(SyntaxKind.CallExpression)
      if (callExpr.getExpression().getText() === 'defineProps') {
        isDefinePropsDestructure = true
      }
    } else if (initializer.getKind() === SyntaxKind.Identifier) {
      if (propsVarNames.has(initializer.getText())) {
        isDefinePropsDestructure = true
      }
    }

    if (isDefinePropsDestructure) {
      const bindingPattern = nameNode.asKindOrThrow(SyntaxKind.ObjectBindingPattern)
      for (const element of bindingPattern.getElements()) {
        const propName = element.getName()
        const elementInitializer = element.getInitializer()

        if (elementInitializer) {
          defaults[propName] = elementInitializer.getText()
        }
      }
    }
  }

  project.removeSourceFile(tempFile)
  return defaults
}

/**
 * Функция добавляет свойства общего из интерфейса, общего для нескольких компонентов
 * !!! Переделать для работы в автоматическом режиме на основе поиска расширений интерфейсов
 */
function mixPropertis(
  interfaceName: string,
  globalInterfaces: Record<string, InterfaceDeclaration>,
  allInterfaceProperties: PropertySignature[],
) {
  const SHARED: Record<string, string> = {
    baseinputprops: 'BaseFieldProps',
    basetextareaprops: 'BaseFieldProps',
  }

  const propKey = SHARED[interfaceName.toLocaleLowerCase()]

  if (propKey !== undefined && globalInterfaces[propKey]) {
    const baseFieldProps = globalInterfaces['BaseFieldProps'].getProperties()

    // Дедуплирование через набор
    const targetPropNames = new Set(allInterfaceProperties.map((p) => p.getName()))

    for (const fieldProp of baseFieldProps) {
      if (!targetPropNames.has(fieldProp.getName())) {
        allInterfaceProperties.push(fieldProp)
      }
    }
  }
}

export default {
  load() {
    const project = new Project()
    const allProps: Record<string, PropItem[]> = {}

    // КРИТИЧЕСКИ ВАЖНО ДЛЯ WINDOWS: заменяем обратные слэши на прямые для fast-glob
    const vueGlob = path.resolve(__dirname, '../src/components/**/*.vue').replace(/\\/g, '/')
    const typesGlob = path.resolve(__dirname, '../src/types/**/*.ts').replace(/\\/g, '/')
    const componentsTsGlob = path.resolve(__dirname, '../src/components/**/*.ts').replace(/\\/g, '/')

    const vueFiles = fg.globSync(vueGlob)
    const tsFiles = fg.globSync([typesGlob, componentsTsGlob])

    if (tsFiles.length > 0) {
      project.addSourceFilesAtPaths(tsFiles)
    }

    // Обработка однофайловых Vue-компонентов
    for (const vueFilePath of vueFiles) {
      const fileContent = fs.readFileSync(vueFilePath, 'utf-8')
      const { descriptor } = parse(fileContent)
      const scriptBlock = descriptor.scriptSetup || descriptor.script

      if (scriptBlock && (scriptBlock.lang === 'ts' || !scriptBlock.lang)) {
        const virtualPath = vueFilePath + '.ts'
        project.createSourceFile(virtualPath, scriptBlock.content, { overwrite: true })
      }
    }

    // Сбор всех интерфейсов проекта, заканчивающиеся на "Props", в словарь.
    const globalInterfaces: Record<string, InterfaceDeclaration> = {}
    const sourceFiles = project.getSourceFiles()

    for (const file of sourceFiles) {
      for (const inter of file.getInterfaces()) {
        const interfaceName = inter.getName()
        if (interfaceName.endsWith('Props')) {
          globalInterfaces[interfaceName] = inter
        }
      }
    }

    // Сопоставление каждого Vue-компонента с его интерфейсом
    for (const vueFilePath of vueFiles) {
      const componentName = path.basename(vueFilePath, '.vue') // например, "BaseInput"
      const interfaceName = `${componentName}Props` // например, "BaseInputProps"

      const targetInterface = globalInterfaces[interfaceName]
      if (!targetInterface) continue

      // 1. Создаем массив из свойств ТЕКУЩЕГО интерфейса (например, BaseInputProps)
      const allInterfaceProperties = [...targetInterface.getProperties()]

      // 2. Если обрабатываем BaseInputProps, безопасно подмешиваем свойства из BaseFieldProps
      // if (interfaceName === 'BaseInputProps' && globalInterfaces['BaseFieldProps']) {
      //   const baseFieldProps = globalInterfaces['BaseFieldProps'].getProperties()

      //   // Запоминаем уже существующие имена свойств, чтобы избежать дубликатов
      //   const targetPropNames = new Set(allInterfaceProperties.map((p) => p.getName()))

      //   for (const fieldProp of baseFieldProps) {
      //     if (!targetPropNames.has(fieldProp.getName())) {
      //       allInterfaceProperties.push(fieldProp)
      //     }
      //   }
      // }
      mixPropertis(interfaceName, globalInterfaces, allInterfaceProperties)

      allInterfaceProperties.sort((a, b) => {
        const aOptional = a.hasQuestionToken()
        const bOptional = b.hasQuestionToken()

        // 1. Если один обязательный, а второй нет — обязательный двигаем вверх
        if (aOptional !== bOptional) {
          return aOptional ? 1 : -1 // false (обязательный) пойдет раньше, чем true (необязательный)
        }

        // 2. Если у них одинаковый статус обязательности, сортируем по алфавиту от A до Z
        return a.getName().localeCompare(b.getName())
      })

      const fileContent = fs.readFileSync(vueFilePath, 'utf-8')
      const { descriptor } = parse(fileContent)
      const scriptBlock = descriptor.scriptSetup || descriptor.script

      if (!scriptBlock) continue

      const fileDefaults = getDefaultValues(scriptBlock.content, project)

      // 3. Используем массив ОДНОМЕРНЫХ свойств напрямую (БЕЗ .getProperties())
      allProps[interfaceName] = allInterfaceProperties.map((prop) => {
        const propName = prop.getName()
        const jsDocs = prop.getJsDocs()
        const jsDoc = jsDocs[0] // Берем первый JSDoc блок

        const ruText =
          jsDoc
            ?.getTags()
            .find((t) => t.getTagName() === 'ru')
            ?.getCommentText() || ''

        const enText =
          jsDoc
            ?.getTags()
            .find((t) => t.getTagName() === 'en')
            ?.getCommentText() || ''

        const resolvedDefault = propName === 'classes' ? fileDefaults['ui'] : fileDefaults[propName]

        const typeNodeText = prop.getTypeNode()?.getText()
        const type = typeNodeText?.startsWith('{') ? typeNodeText : typeNodeText || prop.getType().getText()

        return {
          description: {
            en: String(enText).trim(),
            ru: String(ruText).trim(),
          },
          isOptional: prop.hasQuestionToken(),
          name: propName,
          type,
          base: resolvedDefault,
        }
      })
    }

    // Удаление виртуальных файлов
    for (const vueFilePath of vueFiles) {
      const virtualFile = project.getSourceFile(vueFilePath + '.ts')

      if (virtualFile) {
        project.removeSourceFile(virtualFile)
      }
    }

    // Контроль удаления виртуальных файлов
    const virtualFilesAfter = project.getSourceFiles().filter((file) => file.getFilePath().endsWith('.vue.ts')).length

    if (virtualFilesAfter > 0) {
      console.error(
        '\x1b[31m%s\x1b[0m',
        `[ERROR] Обнаружена утечка памяти! ${virtualFilesAfter} виртуальных файлов не было удалено.`,
      )
      process.exit(1)
    }

    return allProps
  },
}
