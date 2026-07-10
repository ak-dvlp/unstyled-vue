import { parse } from '@vue/compiler-sfc'
import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'
import { Project, type SourceFile, SyntaxKind } from 'ts-morph'
import { fileURLToPath } from 'url'

import type { PropItem } from './types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

declare const data: Record<string, PropItem[]>
export { data }

/** Извлекает значения свойств по умолчанию из AST блока <script> Vue SFC. */
function getDefaultValues(file: SourceFile): Record<string, string> {
  const defaults: Record<string, string> = {}

  // Проверка макроса withDefaults компилятора Vue.js
  const callExpressions = file.getDescendantsOfKind(SyntaxKind.CallExpression)
  for (const call of callExpressions) {
    if (call.getExpression().getText() === 'withDefaults') {
      const args = call.getArguments()

      if (args[1] && args[1].getKind() === SyntaxKind.ObjectLiteralExpression) {
        const obj = args[1].asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
        for (const prop of obj.getProperties()) {
          if (prop.getKind() === SyntaxKind.PropertyAssignment) {
            const assignment = prop.asKindOrThrow(SyntaxKind.PropertyAssignment)
            defaults[assignment.getName()] = assignment.getInitializer()?.getText() || ''
          }
        }
      }
    }
  }

  // Проверка реактивной деструктуризации
  const bindings = file.getDescendantsOfKind(SyntaxKind.BindingElement)
  for (const binding of bindings) {
    // Проверка, что привязка относится к объявлению переменной, в котором используются defineProp
    const varDecl = binding.getFirstAncestorByKind(SyntaxKind.VariableDeclaration)

    if (varDecl?.getInitializer()?.getText().includes('defineProps')) {
      const name = binding.getName()
      const initializer = binding.getInitializer()
      if (initializer) {
        defaults[name] = initializer.getText()
      }
    }
  }

  return defaults
}

export default {
  load() {
    const project = new Project()
    const allProps: Record<string, PropItem[]> = {}

    const vueFiles = fg.globSync(path.resolve(__dirname, '../src/components/**/*.vue'))
    const tsFiles = fg.globSync(path.resolve(__dirname, '../src/types/**/*.ts'))

    if (tsFiles.length > 0) {
      project.addSourceFilesAtPaths(tsFiles)
    }

    // Обработка однофайловых Vue-компонентов
    for (const vueFilePath of vueFiles) {
      const fileContent = fs.readFileSync(vueFilePath, 'utf-8')
      const { descriptor } = parse(fileContent)

      const scriptBlock = descriptor.scriptSetup || descriptor.script

      if (scriptBlock && (scriptBlock.lang === 'ts' || !scriptBlock.lang)) {
        // Создание виртуального файла внутри ts-morph
        const virtualPath = vueFilePath + '.ts'
        project.createSourceFile(virtualPath, scriptBlock.content, { overwrite: true })
      }
    }

    const sourceFiles = project.getSourceFiles()

    for (const file of sourceFiles) {
      const interfaces = file.getInterfaces()

      const fileDefaults = getDefaultValues(file)

      for (const inter of interfaces) {
        const interfaceName = inter.getName()

        if (!interfaceName.endsWith('Props')) continue

        allProps[interfaceName] = inter.getProperties().map((prop) => {
          const propName = prop.getName()
          const jsDocs = prop.getJsDocs()
          const jsDoc = jsDocs[0]

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

          const resolvedDefault = fileDefaults[propName]

          return {
            description_en: typeof enText === 'string' ? enText.trim() : 'No description provided',
            description_ru: typeof ruText === 'string' ? ruText.trim() : 'Описание отсутствует',
            isOptional: prop.hasQuestionToken(),
            name: prop.getName(),
            type: prop.getType().getText(),
            ...(resolvedDefault ? { default: resolvedDefault } : {}),
          }
        })
      }
    }

    return allProps
  },
}
