# BaseTable

## Model

v-model binding not supported.

## Props

<script setup>
import { data } from '../../props.data.ts'
</script>

<PropsTable :rows="data.BaseTableProps"  />

```ts
type TableCol<T> = {
  /** Unique column key */
  key: Extract<keyof T, string>
  /** Column width (any CSS value: '5rem', '100px', 'auto', etc.) */
  width?: string
  /** Minimum column width (any CSS value: '5rem', '100px', 'auto', etc.) */
  minWidth?: string
}
```

```ts
type HeaderCell = {
  /** Column header */
  label: string
  /** Number of columns to span */
  span?: number
}
```

## Template

```html{1,2,8,9,13,21,22,26,40,41}
<div :class="ui?.root">
  <table :class="ui?.table">
    <!-- Semantic column definitions -->
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
            <!-- Fallback text -->
            {{ row[col.key] }}
          </slot>
        </td>
      </tr>

      <!-- String for empty rows array -->
      <tr v-if="rows.length === 0" :class="ui?.row">
        <td :class="ui?.emptyCell" :colspan="cols.length">
          <!-- Fallback text -->
          <slot name="empty"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Example

<ExampleContainer>
  <ExampleTable />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTable.vue#example-table-template {ts}

## Component Internals Notes

The `empty` slot allows a message to be displayed when the rows array is empty.
