/// <reference types="vite/client" />
/* eslint-disable simple-import-sort/imports */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// Порядок имеет значение. В данном случае пользовательские стили должны импортироваться после стилей по умолчанию.
import './custom.css'

import BaseCheckbox from '../../../src/components/base-checkbox/BaseCheckbox.vue'
import UserCheckbox from '../../../examples/src/user-components/UserCheckbox.vue'
import BaseTable from '../../../src/components/base-table/BaseTable.vue'
import PropsTable from './components/PropsTable.vue'
import ComposableTable from './components/ComposableTable.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // Глобальная регистрация компонентов
    app.component('BaseTable', BaseTable)
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('UserCheckbox', UserCheckbox)
    app.component('PropsTable', PropsTable)
    app.component('ComposableTable', ComposableTable)
  },
} satisfies Theme
