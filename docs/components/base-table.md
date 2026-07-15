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

```html{1,2,8,9,13,21,22,26,40,41}
<div :class="ui?.root">
  <table :class="ui?.table">
    <!-- Семантическое описание колонок -->
    <colgroup>
      <col v-for="(col, i) in cols" :key="i" :style="{ width: col.width }" />
    </colgroup>

    <thead :class="ui?.header">
      <tr :class="ui?.headerRow">
        <th
          v-for="(col, i) in resolvedHeaders"
          :key="i"
          :class="ui?.headerCell"
          :colspan="typeof col === 'object' ? col.span || 1 : 1"
        >
          {{ typeof col === 'object' ? col.label : col }}
        </th>
      </tr>
    </thead>

    <tbody :class="ui?.body">
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="ui?.row">
        <td
          v-for="(col, colIndex) in cols"
          :key="colIndex"
          :class="ui?.cell"
          :style="{
              width: col.width,
              minWidth: col.minWidth || col.width,
            }"
        >
          <slot :index="rowIndex" :name="col.key" :row="row" :value="row[col.key]">
            <!-- Текст по умолчанию -->
            {{ row[col.key] }}
          </slot>
        </td>
      </tr>

      <!-- Строка для пустого массива rows -->
      <tr v-if="rows.length === 0" :class="ui?.row">
        <td :class="ui?.emptyCell" :colspan="cols.length">
          <!-- Текст по умолчанию -->
          <slot name="empty"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Пример

<ExampleContainer>
  <ExampleTable />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTable.vue#example-table-template {ts}

## Комментарии к устройству компонента

Наличие слота `empty` позволяет отображать сообщение при пустом массиве `rows`.
