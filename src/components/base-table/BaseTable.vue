<script setup lang="ts" generic="T extends Record<string, any>">
import { computed } from 'vue'

import type { BaseTableProps, HeaderCell } from '.'

const { classes = undefined, cols = [], headers = [], rows = [] } = defineProps<BaseTableProps<T>>()

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
  <!-- #region base-table-template -->
  <div :class="classes?.root">
    <table :class="classes?.table">
      <colgroup>
        <col v-for="(col, i) in cols" :key="i" :style="{ width: col.width }" />
      </colgroup>

      <thead :class="classes?.header">
        <tr :class="classes?.headerRow">
          <th
            v-for="(col, i) in resolvedHeaders"
            :key="i"
            :class="classes?.headerCell"
            :colspan="typeof col === 'object' ? col.span || 1 : 1"
          >
            {{ typeof col === 'object' ? col.label : col }}
          </th>
        </tr>
      </thead>

      <tbody :class="classes?.body">
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="classes?.row">
          <td
            v-for="(col, colIndex) in cols"
            :key="colIndex"
            :class="classes?.cell"
            :style="{
              width: col.width,
              minWidth: col.minWidth || col.width,
            }"
          >
            <slot :index="rowIndex" :name="col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>

        <tr v-if="rows.length === 0" :class="classes?.row">
          <td :class="classes?.emptyCell" :colspan="cols.length">
            <slot name="empty"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- #endregion base-table-template -->
</template>
