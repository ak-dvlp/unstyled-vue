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
├── .gitattributes
├── .gitignore
├── .nvmrc
├── .prettierrc
├── env.d.ts
├── eslint.config.ts
├── package.json
├── playwright.config.ts - конфигурация Playwright (сквозные тесты)
├── playwright-ct.config.ts - конфигурация Playwright (тесты компонентов)
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.vitest.json
├── vite.config.ts - конфигурация сборщика Vite
├── vitest.config.ts - конфигурация Vitest (модульные тесты)
└── yarn.lock
```

</details>

<details>
<summary style="font-size: 1.25em; font-weight: 600;">⚙️ Конфигурация среды разработки и инструментов по форматированию</summary>

### settings.json

```json
{
  // Запуск форматирования при каждом явном сохранении (Ctrl + S).
  "editor.formatOnSave": true,
  // Назначение Prettier в качестве основного средства форматирования кода для всего проекта для всех типов файлов.
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    // Явное назначение Prettier в качестве основного средства форматирования Vue файлов.
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    // Явное назначение Prettier в качестве основного средства форматирования TypeScript файлов.
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    // Исправляет все ошибки которые могут быть исправлены автоматически при явном сохранении (Ctrl + S).
    "source.fixAll.eslint": "explicit"
  },
  /** Даёт расширению ESLint разрешение просматривать файлы JavaScript, TypeScript и Vue.
   * Без этой строки ESLint просматривал бы только исходные файлы JavaScript и полностью игнорировал бы шаблоны .vue.
   */
  "eslint.validate": ["javascript", "typescript", "vue"],

  // Взаимодействие с расширением cSpell для проверки орфографии.
  "cSpell.words": ["Aleksandr", "ianvs", "maxlength"]
}
```

`ESLint` выполняет сортировку:

а) Vue-атрибутов блока `<template>` (`eslint-plugin-vue`);  
б) Импортов и экспортов во Vue-компонентах и TypeScript-файлах (`eslint-plugin-simple-import-sort`).

`Prettier` выполняет сортировку:

а) Служебных классов Tailwind в значении атрибута class (`prettier-plugin-tailwindcss`);  
б) CSS-правил блока `<style>` однофайловых Vue-компонентов (`prettier-plugin-css-order`).

</details>
