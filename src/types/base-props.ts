// #region base-checkbox-props
export interface BaseCheckboxProps {
  /** Состояние "отключено". */
  disabled?: boolean
  /** Ложное значение. */
  falseValue?: string | number | boolean | null
  /** Ярлык. */
  label?: string
  /** Имя. */
  name?: string
  /** Состояние "только для чтения". */
  readonly?: boolean
  /** Истинное значение. */
  trueValue?: string | number | boolean | null
}
// #endregion base-checkbox-props

// #region base-field-props
export interface BaseFieldProps {
  /** Автозаполнение. */
  autocomplete?: string
  /** Состояние "отключено". */
  disabled?: boolean
  /** Идентификатор. */
  id?: string
  /** Максимальная длина строки. */
  maxlength?: number
  /** Минимальная длина строки. */
  minlength?: number
  /** Имя. */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения. */
  placeholder?: string
  /** Состояние "только для чтения". */
  readonly?: boolean
  /** Поле обязательно к заполнению. */
  required?: boolean
}
// #endregion base-field-props
