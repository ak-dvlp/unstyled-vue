# BaseTable

## Модель

Двустороннее связывание не поддерживается.

## Входные параметры

<script setup>
import { data } from '../props.data.ts'
</script>

<PropsTable :rows="data.BaseTableProps"  />

```ts
export type TableCol<T> = {
  /** Уникальный ключ столбца */
  key: Extract<keyof T, string>
  /** Ширина столбца (любое CSS-значение: '5rem', '100px', 'auto' и др.) */
  width?: string
  /** Минимальная ширина столбца (любое CSS-значение: '5rem', '100px', 'auto' и др.) */
  minWidth?: string
}
```

```ts
export type HeaderCell = {
  /** Заголовок столбца */
  label: string
  /** Количество объединяемых колонок */
  span?: number
}
```

## Шаблон

<<< @/../src/components/base-table/BaseTable.vue#base-table-template {1,2,7,8,12,20,21,25,37,38html}

## Пример

<ExampleContainer simple>
  <ExampleTable />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTable.vue#example-table-classes {ts}

## Комментарии к устройству компонента

Наличие слота `empty` позволяет отображать сообщение при пустом массиве `rows`.
