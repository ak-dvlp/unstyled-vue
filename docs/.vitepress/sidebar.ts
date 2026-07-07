import type { DefaultTheme } from 'vitepress'

export const sidebarConfig: DefaultTheme.Sidebar = {
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

  '/composables': {
    text: 'Составные функции',
    collapsed: false,
    items: [{ text: 'Составные функции', link: '/composables/' }],
  },

  '/types': {
    text: 'Типы',
    collapsed: false,
    items: [{ text: 'Типы', link: '/types/' }],
  },

  '/examples': {
    text: 'Примеры использования',
    collapsed: false,
    items: [
      { text: 'Обзор', link: '/examples/' },
      { text: 'UserInput', link: '/examples/user-input' },
    ],
  },
}
