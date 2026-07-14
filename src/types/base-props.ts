export interface BaseFieldProps {
  /**
   * @ru Автозаполнение
   * @en Autocomplete
   */
  autocomplete?: string
  /**
   * @ru Состояние "отключено"
   * @en Disabled state
   */
  disabled?: boolean
  /**
   * @ru Идентификатор
   * @en Identifier
   */
  id?: string
  /**
   * @ru Максимальная длина строки
   * @en Maximum string length
   */
  maxlength?: number
  /**
   * @ru Минимальная длина строки
   * @en Minimum string length
   */
  minlength?: number
  /**
   * @ru Имя
   * @en Name
   */
  name?: string
  /**
   * @ru Строка отображаемая в случае отсутствия какого-либо значения
   * @en Text displayed when there is no value
   */
  placeholder?: string
  /**
   * @ru Состояние "только для чтения"
   * @en Read-only state
   */
  readonly?: boolean
  /**
   * @ru Обязательное поле
   * @en Required field
   */
  required?: boolean
}
