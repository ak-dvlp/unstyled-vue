import { defineConfig } from 'vitepress'

import { sidebarConfigEnglish } from './sidebar-en'
import { sidebarConfigRussian } from './sidebar-ru'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/unstyled-vue/',
  title: 'Unstyled-vue',
  description: 'Базовые Vue‑компоненты и составные функции: без встроенных стилей, под свою дизайн‑систему.',

  // markdown: {
  //   container: {
  //     infoLabel: 'Информация',
  //     tipLabel: 'Совет',
  //     warningLabel: 'Предупреждение',
  //     dangerLabel: 'Опасность',
  //     detailsLabel: 'Подробнее',
  //   },
  // },

  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',

      themeConfig: {
        nav: [
          {
            text: 'Навигация',
            activeMatch: '^/(components|composables|usage-examples)/',
            items: [
              { text: 'Компоненты', link: '/components/' },
              { text: 'Составные функции', link: '/composables/' },
              { text: 'Примеры использования', link: '/usage-examples/' },
            ],
          },
        ],

        // Левое навигационное меню
        sidebar: sidebarConfigRussian,

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
    },

    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',

      themeConfig: {
        nav: [
          {
            text: 'Navigation',
            activeMatch: '^/en/(components|composables|usage-examples)/',
            items: [
              { text: 'Components', link: '/en/components/' },
              { text: 'Composables', link: '/en/composables/' },
              { text: 'Usage Examples', link: '/en/usage-examples/' },
            ],
          },
        ],

        sidebar: sidebarConfigEnglish,
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/ak-dvlp/unstyled-vue' }],
  },
})
