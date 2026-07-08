import type { DefaultTheme } from 'vitepress'

export const sidebarConfigRussian: DefaultTheme.Sidebar = {
  '/components': [
    {
      text: 'Компоненты',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/components/' },
        { text: 'BaseCheckbox', link: '/components/base-checkbox' },
        { text: 'BaseInput', link: '/components/base-input' },
        { text: 'BaseSwitch', link: '/components/base-switch' },
        { text: 'BaseTextarea', link: '/components/base-textarea' },
        { text: 'BaseToggle', link: '/components/base-toggle' },
        { text: 'SegmentedControl', link: '/components/segmented-control' },
      ],
    },
  ],

  '/composables': [
    {
      items: [{ text: 'Составные функции', link: '/composables/' }],
    },
  ],

  '/usage-examples': [
    {
      text: 'Примеры использования',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/usage-examples/' },
        { text: 'UserInput', link: '/usage-examples/user-input' },
      ],
    },
  ],
}
