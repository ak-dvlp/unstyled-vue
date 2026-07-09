# BaseTable

## Component Architecture Notes

The type expression `Extract<keyof T, string>` in type `RowCell<T>` prompts TypeScript to scan all keys of object `T` and filter out anything that is not a standard string.

```ts{2}
type RowCell<T> = {
  key: Extract<keyof T, string>
  label: string
  width?: string
}
```
