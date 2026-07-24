# BaseTable

## Model

`v-model` binding not supported.

The component uses a generic type `T` (extending `Record<string, any>`) that defines the structure of a single data row. It maps the item type of the `rows` array to dynamic cell slot names and column configurations.

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

<<< @/../src/components/base-table/BaseTable.vue#base-table-template {1,2,7,8,12,20,21,25,37,38html}

## Example

<ExampleContainer simple>
  <ExampleTable />
</ExampleContainer>

<<< @/../examples/src/components/ExampleTable.vue#example-table-template {3-10html}

## Component Internals Notes

The `empty` slot allows a message to be displayed when the rows array is empty.
