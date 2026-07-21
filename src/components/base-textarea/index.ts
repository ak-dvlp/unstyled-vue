import type { BaseFieldProps } from '../../types/base-props.ts'

export { default as BaseTextarea } from './BaseTextarea.vue'

// #region base-textarea-model
export type BaseTextareaModel = string | number | null
// #endregion base-textarea-model

export interface BaseTextareaProps extends BaseFieldProps {
  /**
   * @ru Автоматическое исправление орфографических ошибок
   * @en Automatic correction of spelling errors
   */
  autocorrect?: 'on' | 'off'
  /**
   * @ru Количество видимых строк области текста
   * @en The number of visible text lines for the textarea
   */
  rows?: number
}
