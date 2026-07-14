export { default as BaseTable } from './BaseTable.vue'

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
   * @ru Классы компонента
   * @en Component classes
   */
  classes?: {
    root?: string
    table?: string
    header?: string
    headerRow?: string
    headerCell?: string
    body?: string
    row?: string
    cell?: string
    emptyCell?: string
  }
  /**
   * @ru Конфигурация шапки таблицы
   * @en Table header configuration
   */
  headers?: string | HeaderCell | (string | HeaderCell)[]
  /**
   * @ru Массив данных для отображения в строках таблицы
   * @en Array of data objects to display in the table rows
   */
  rows?: T[]
}
