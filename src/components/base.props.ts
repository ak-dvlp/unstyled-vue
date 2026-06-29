export interface BaseInputProps {
  /** Автозаполнение */
  autocomplete?: string
  /** Состояние "отключено" */
  disabled?: boolean
  /** Идентификатор */
  id?: string
  /** Максимальная длина строки  */
  maxlength?: number
  /** Минимальная длина строки */
  minlength?: number
  /** Имя */
  name?: string
  /** Строка отображаемая в случае отсутствия какого-либо значения */
  placeholder?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Поле ввода должно быть заполнено */
  required?: boolean
}
