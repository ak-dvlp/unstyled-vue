/* eslint-disable simple-import-sort/imports */
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Порядок имеет значение. В данном случае пользовательские стили должны импортироваться после стилей по умолчанию.
import './custom.css'

import BaseCheckbox from '../../../src/components/base-checkbox/BaseCheckbox.vue'

// export default DefaultTheme
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // регистрируем пользовательские глобальные компоненты
    app.component('BaseCheckbox', BaseCheckbox)
  },
} satisfies Theme
