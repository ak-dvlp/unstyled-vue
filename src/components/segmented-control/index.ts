export { default as SegmentedControl } from './SegmentedControl.vue'

export interface SegmentedControlProps {
  /** Имя */
  name: string

  /** Ложное значение */
  falseValue?: string | number
  /** Истинное значение */
  trueValue?: string | number
}
