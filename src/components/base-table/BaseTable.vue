<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue'

export type TableCol<T> = {
  /** Уникальный ключ столбца */
  key: Extract<keyof T, string>
  /** Ширина столбца (любое CSS-значение: '5rem', '100px', 'auto' и др.) */
  width?: string
  /** Минимальная ширина столбца (любое CSS-значение: '5rem', '100px', 'auto' и др.) */
  minWidth?: string
}

export type HeaderCell = {
  /** Текст заголовка столбца */
  label: string
  /** Количество объединяемых колонок */
  span?: number
}

export interface BaseTableProps<T> {
  /**
   * @ru Конфигурация колонок таблицы
   * @en Table column configuration
   */
  cols: TableCol<T>[]
  /**
   * @ru Конфигурация шапки таблицы
   * @en Table header configuration
   */
  headers: string | HeaderCell | (string | HeaderCell)[]
  /**
   * @ru Массив данных для отображения в строках таблицы
   * @en Array of data objects to display in the table rows
   */
  rows: T[]
}

const { headers } = defineProps<BaseTableProps<T>>()

type DynamicSlots<T> = {
  [K in Extract<keyof T, string>]?: (props: { index: number; row: T; value: T[K] }) => unknown
}

type StaticSlots = {
  empty?: (props: Record<string, never>) => unknown
}

defineSlots<DynamicSlots<T> & StaticSlots>()

const resolvedHeaders = computed((): (string | HeaderCell)[] => {
  if (Array.isArray(headers)) {
    return headers
  }

  return headers ? [headers] : []
})
</script>

<template>
  <div class="table__container">
    <table class="table">
      <!-- Семантическое описание колонок -->
      <colgroup>
        <col v-for="(col, i) in cols" :key="i" :style="{ width: col.width }" />
      </colgroup>

      <thead class="table__thead">
        <tr class="table__row--header">
          <th
            v-for="(col, i) in resolvedHeaders"
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
</template>

<!-- <style scoped>
.table__container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  /* color: var(--vp-c-text-2, #98989f); */
}

.table__cell--header,
.table__cell {
  word-break: break-word;
  overflow-wrap: break-word;
}
</style> -->
