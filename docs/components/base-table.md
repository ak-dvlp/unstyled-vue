# BaseTable

## Примечания к устройству компонента

Выражение типа `Extract<keyof T, string>` в типе `RowCell<T>` побуждает `TypeScript` просмотреть все ключи объекта `T` и отбросить всё, что не является обычной строкой.

```ts{2}
export type RowCell<T> = {
  key: Extract<keyof T, string>
  label: string
  width?: string
}
```
