export interface BaseCheckboxProps {
  /**
   * @ru Состояние "отключено"
   * @en Disabled state
   */
  disabled?: boolean
  /**
   * @ru Ложное значение
   * @en False value
   */
  falseValue?: string | number | boolean | null
  /**
   * @ru Метка
   * @en Label
   */
  label?: string
  /**
   * @ru Имя
   * @en Name
   */
  name?: string
  /**
   * @ru Состояние "только для чтения"
   * @en Read-only state
   */
  readonly?: boolean
  /**
   * @ru Истинное значение
   * @en True value
   */
  trueValue?: string | number | boolean | null
}

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
