# unstyled-vue

Библиотека базовых Vue‑компонентов и составных функций (composables) для построения пользовательских интерфейсов. Компоненты не содержат встроенных стилей и спроектированы как атомарные элементы, позволяющие формировать произвольную структуру и оформление в рамках требуемой дизайн‑системы.

### Установка пакетов

```bash
yarn install
```

### Интерактивное обновление пакетов

```bash
yarn upgrade-interactive --latest
```

### Запуск демонстрационной версии

```bash
yarn demo
```

### Запуск тестов компонентов в режиме UI mode

```bash
yarn test-ct
```

---

<details>
<summary style="font-size: 1.25em; font-weight: 600;">🗄️ Структура проекта</summary>

```bash
├── .vscode/ - проектные настройки для VS Code
├── examples/
│   ├── public/ - статические ресурсы, которые не участвуют в сборке
│   ├── src/
│   │   ├── assets/ - статические ресурсы, которые участвуют в сборке
│   │   ├── plugins/
│   │   │   └── global-components.ts - глобальная регистрация компонентов библиотеки
│   │   ├── router/ - маршрутизатор
│   │   ├── styles/
│   │   │   ├── components/ - стили компонентов
│   │   │   ├── base.css - семантические переменные, стили светлой и тёмной темы, базовые стили
│   │   │   └── main.css - сопоставление семантических переменных, импорт стилей файла base.css и стилей компонентов
│   │   ├── types/
│   │   │   └── components.d.ts - определения типов TypeScript для глобально зарегистрированных компонентов библиотеки
│   │   ├── user-components/ - пользовательские компоненты
│   │   ├── views/ - представления
│   │   ├── App.vue - корневой компонент Vue-приложения
│   │   └── main.ts - точка входа во Vue-приложение
│   └── index.html - веб-страница для отображения Vue-приложения
├── playwright
│   ├── index.html
│   └── index.ts
├── src/
│   ├── components/ - компоненты библиотеки
│   ├── composables/ - составные функции библиотеки компонентов
│   ├── types/
│   │   ├── base-emits.ts - базовые типы событий для компонентов библиотеки
│   │   └── base-props.ts - базовые типы свойств для компонентов библиотеки
│   └── index.ts - экспорты компонентов библиотеки
├── tests/
│   ├── ui-components/ - тесты компонентов библиотеки
│   └── user-components/ - тесты пользовательских компонентов
├── .editorconfig - конфигурация среды разработки
├── .eslintcache - кэш результатов проверки ESLint
├── .gitignore
├── .nvmrc
├── .prettierrc
├── README.md
├── env.d.ts
├── eslint.config.ts
├── package.json
├── playwright.config.ts - конфигурация Playwright (сквозные тесты)
├── playwright-ct.config.ts - конфигурация Playwright (тесты компонентов)
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.vitest.json
├── vite.config.ts - конфигурация сборщика Vite
├── vitest.config.ts - конфигурация Vitest (модульные тесты)
└── yarn.lock
```

</details>
