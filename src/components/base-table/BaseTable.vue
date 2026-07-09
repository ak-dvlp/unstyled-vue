<script setup lang="ts" generic="T extends Record<string, any>">
export type TableCol<T> = {
  key: Extract<keyof T, string>
  width?: string
}

export type HeaderCell = {
  label: string
  span?: number
}

export interface BaseTableProps<T> {
  /** Конфигурация колонок таблицы. */
  cols: TableCol<T>[]
  /** Конфигурация шапки таблицы. */
  headers: (string | HeaderCell)[]
  /** Отображаемые строки таблицы. */
  rows: T[]
}

defineProps<BaseTableProps<T>>()

type DynamicSlots<T> = {
  [K in Extract<keyof T, string>]?: (props: { index: number; row: T; value: T[K] }) => unknown
}

type StaticSlots = {
  empty?: (props: Record<string, never>) => unknown
}

defineSlots<DynamicSlots<T> & StaticSlots>()
</script>

<template>
  <table class="table">
    <!-- Семантическое описание колонок. -->
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
      <tr v-for="(row, i) in rows" :key="i" class="table__row">
        <td v-for="(col, rowIndex) in cols" :key="rowIndex" class="table__cell">
          <slot :index="i" :name="col.key" :row="row" :value="row[col.key]">
            <!-- Текст по умолчанию. -->
            {{ row[col.key] }}
          </slot>
        </td>
      </tr>

      <!-- Строка для пустого массива rows. -->
      <tr v-if="rows.length === 0" class="table__row">
        <td class="table__cell--empty" :colspan="cols.length">
          <!-- Текст по умолчанию. -->
          <slot name="empty">Таблица пуста</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
</style>
