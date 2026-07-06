import pluginVitest from '@vitest/eslint-plugin'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'
import skipFormatting from 'eslint-config-prettier/flat'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginPlaywright from 'eslint-plugin-playwright'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
// @ts-expect-error Плагин не предоставляет определения типов TypeScript
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  {
    files: ['**/*.{vue,ts}'],
    name: 'app/files-to-lint',
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    name: 'app/sorting-rules',
    plugins: {
      perfectionist,
      'simple-import-sort': simpleImportSort,
      'sort-destructure-keys': sortDestructureKeys,
    },
    rules: {
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',

          newlinesBetween: 1,

          groups: ['required-properties', 'optional-properties', 'unknown'],
          customGroups: [
            {
              groupName: 'required-properties',
              selector: 'property',
              modifiers: ['required'],
            },
            {
              groupName: 'optional-properties',
              selector: 'property',
              modifiers: ['optional'],
            },
          ],
        },
      ],

      'perfectionist/sort-objects': 'off',
      'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',

      'vue/attributes-order': [
        'error',
        {
          alphabetical: true,
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'SLOT',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
        },
      ],
    },
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  skipFormatting,
)
