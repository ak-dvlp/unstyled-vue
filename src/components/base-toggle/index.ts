export { default as BaseToggle } from './BaseToggle.vue'

export interface BaseToggleProps {
  /** Имя */
  name: string

  /** Ложное значение */
  falseValue?: string | number
  /** Истинное значение */
  trueValue?: string | number
}
