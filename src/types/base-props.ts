export interface BaseCheckboxProps {
  /** Состояние "отключено". */
  disabled?: boolean
  /** Активация промежуточного состояния */
  // indeterminate?: boolean
  /** Ложное значение */
  falseValue?: string | number | null
  /** Ярлык */
  label?: string
  /** Имя */
  name?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Истинное значение */
  trueValue?: string | number | null
}

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
