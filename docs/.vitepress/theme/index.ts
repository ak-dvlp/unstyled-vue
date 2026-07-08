/* eslint-disable simple-import-sort/imports */
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Порядок имеет значение. В данном случае пользовательские стили должны импортироваться после стилей по умолчанию.
import './custom.css'

import BaseCheckbox from '../../../src/components/base-checkbox/BaseCheckbox.vue'
import PropsTable from './components/PropsTable.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Глобальная регистрация компонентов
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('PropsTable', PropsTable)
  },
} satisfies Theme
