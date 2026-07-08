import path from 'path'
import { Project } from 'ts-morph'
import { fileURLToPath } from 'url'

import type { PropItem } from '../types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

declare const data: Record<string, PropItem[]>
export { data }

export default {
  watch: ['../src/components/**/*.vue', '../src/types/**/*.ts'],

  load() {
    // const project = new Project({ compilerOptions: { allowJs: true } })
    const project = new Project()

    // Массив путей к целевым папкам содержащим нужные типы данных.
    const srcPaths = [
      path.resolve(__dirname, '../src/components/**/*.vue'),
      path.resolve(__dirname, '../src/types/**/*.ts'),
    ]

    const sourceFiles = project.addSourceFilesAtPaths(srcPaths)

    const allProps: Record<string, PropItem[]> = {}

    for (const file of sourceFiles) {
      // Находит любой интерфейс, который оканчивается словом "Props" (например: BaseCheckboxProps, BaseFieldProps).
      const interfaces = file.getInterfaces()

      for (const inter of interfaces) {
        const interfaceName = inter.getName()

        // Пропускает интерфейсы, которые не соответствуют соглашению об именовании.
        if (!interfaceName.endsWith('Props')) continue

        // const componentKey = interfaceName.replace('Props', '').toLowerCase()

        allProps[interfaceName] = inter.getProperties().map((prop) => {
          // Получение массива блоков JSDoc.
          const jsDoc = prop.getJsDocs()[0]

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

          return {
            description_en: enText.trim() || 'No description provided',
            description_ru: ruText.trim() || 'Описание отсутствует',
            isOptional: prop.hasQuestionToken(),
            name: prop.getName(),
            type: prop.getType().getText(),
          }
        })
      }
    }

    return allProps
  },
}
