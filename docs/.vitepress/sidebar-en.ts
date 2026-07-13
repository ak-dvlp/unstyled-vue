import type { DefaultTheme } from 'vitepress'

export const sidebarConfigEnglish: DefaultTheme.Sidebar = {
  '/en/components': [
    {
      text: 'Components',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/en/components/' },
        { text: 'BaseCheckbox', link: '/en/components/base-checkbox' },
        // { text: 'BaseInput', link: '/en/components/base-input' },
        { text: 'BaseSwitch', link: '/en/components/base-switch' },
        { text: 'BaseTable', link: '/en/components/base-table' },
        // { text: 'BaseTextarea', link: '/en/components/base-textarea' },
        // { text: 'BaseToggle', link: '/en/components/base-toggle' },
        // { text: 'SegmentedControl', link: '/en/components/segmented-control' },
      ],
    },
  ],

  '/en/composables': [
    {
      items: [{ text: 'Composables', link: '/en/composables/' }],
    },
  ],
}
