export interface PropItem {
  /** Описание свойства компонента на английском языке. */
  description_en: string
  /** Описание свойства компонента на русском языке. */
  description_ru: string
  /** Свойство не является обязательным. */
  isOptional: boolean
  /** Имя свойства. */
  name: string
  /** Тип (объединение типов) свойства. */
  type: string
}
