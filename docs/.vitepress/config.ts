import { defineConfig } from 'vitepress'

import { sidebarConfig } from './sidebar.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: 'Unstyled-vue',
  description: 'Базовые Vue‑компоненты и составные функции: без встроенных стилей, под свою дизайн‑систему.',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // Навигационное меню в шапке сайта
    nav: [
      {
        text: 'Навигация', // The text visible on the main navigation bar
        activeMatch: '^/(components|composables|examples)/', // Highlights this menu if active
        items: [
          { text: 'Компоненты', link: '/components/' },
          { text: 'Составные функции', link: '/composables/' },
          { text: 'Типы', link: '/types/' },
          { text: 'Примеры использования', link: '/examples/' },
        ],
      },
    ],

    // Левое навигационное меню
    sidebar: sidebarConfig,
    // sidebar: [
    //   {
    //     text: 'Примеры',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Aleksandr-86/unstyled-vue' }],

    // Метка времени последнего обновления для каждой страницы.
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    // Навигация по странице
    outline: {
      label: 'На этой странице',
    },

    // Ссылки подвала сайта
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },

    // Локализация всплывающего окна
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск',
          },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить поиск',
            footer: {
              selectText: 'Выбрать',
              navigateText: 'Навигация',
              closeText: 'Закрыть',
            },
          },
        },
      },
    },

    // Локализация переключателя темы
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',

    // Локализация мобильного меню
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
  },
})
