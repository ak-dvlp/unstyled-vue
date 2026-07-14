export { default as BaseCheckbox } from './BaseCheckbox.vue'

export interface BaseCheckboxProps {
  /**
   * @ru Классы компонента
   * @en Component classes
   */
  classes?: {
    root?: string
    control?: string
    label?: string
  }
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
