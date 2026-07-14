<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue'

import type { BaseTableProps, HeaderCell } from '.'

const { classes: ui = {}, cols = [], headers = [], rows = [] } = defineProps<BaseTableProps<T>>()

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
</template>
