export { default as BaseCheckbox } from './BaseCheckbox.vue'

// #region base-checkbox-model
export type BaseCheckboxModel = string | number | boolean | null
// #endregion base-checkbox-model

export interface BaseCheckboxProps {
  /**
   * @ru Идентификатор элемента (например, подсказки или ошибки), описывающего данное поле выбора
   * @en Identifier of the element (e.g., hint or error) describing this checkbox
   */
  ariaDescribedby?: string
  /**
   * @ru Состояние ошибки/невалидности для программ экранного доступа
   * @en Invalid state for screen readers
   */
  ariaInvalid?: boolean | 'grammar' | 'spelling'
  /**
   * Текстовая строка, описывающая элемент для программ экранного доступа (когда визуальный текст отсутствует или недостаточен).
   * @en A text string that labels the element for screen readers (used when the visual label is missing or insufficient).
   */
  ariaLabel?: string
  /**
   * @ru Классы компонента
   * @en Component classes
   */
  classes?: {
    root?: string
    input?: string
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
   * @ru Обязательное поле
   * @en Required field
   */
  required?: boolean
  /**
   * @ru Истинное значение
   * @en True value
   */
  trueValue?: string | number | boolean | null
}
