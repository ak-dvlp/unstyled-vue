# BaseTable

## Модель

Двустороннее связывание данных не поддерживается.

## Свойства

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
  /** Текст заголовка столбца */
  label: string
  /** Количество объединяемых колонок */
  span?: number
}
```

## Шаблон

```html{1,2,8,9,13,21,22,26,40,41}
  <div class="table__container">
    <table class="table">
      <!-- Семантическое описание колонок -->
      <colgroup>
        <col v-for="(col, i) in cols" :key="i" :style="{ width: col.width }" />
      </colgroup>

      <thead class="table__thead">
        <tr class="table__row--header">
          <th
            v-for="(col, i) in headers"
            :key="i"
            class="table__cell--header"
            :colspan="typeof col === 'object' ? col.span || 1 : 1"
          >
            {{ typeof col === 'object' ? col.label : col }}
          </th>
        </tr>
      </thead>

      <tbody class="table__tbody">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="table__row">
          <td
            v-for="(col, colIndex) in cols"
            :key="colIndex"
            class="table__cell"
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
        <tr v-if="rows.length === 0" class="table__row">
          <td class="table__cell--empty" :colspan="cols.length">
            <!-- Текст по умолчанию -->
            <slot name="empty">Таблица пуста</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
```
