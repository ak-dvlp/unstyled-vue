import type { BaseFieldProps } from '../../types/base-props'

export { default as BaseInput } from './BaseInput.vue'

// #region base-input-model
export type BaseInputModel = string | number | null
// #endregion base-input-model

export interface BaseInputProps extends BaseFieldProps {
  /**
   * @ru Максимальное значение
   * @en Max value
   */
  max?: number
  /**
   * @ru Минимальное значение
   * @en Min value
   */
  min?: number
  /**
   * @ru Тип
   * @en Type
   */
  type?: string
}
