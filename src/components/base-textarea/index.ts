import type { BaseFieldProps } from '../../types/base-props.ts'

export { default as BaseTextarea } from './BaseTextarea.vue'

export interface BaseTextareaProps extends BaseFieldProps {
  /** Автоматическое исправление орфографических ошибок */
  autocorrect?: 'on' | 'off'
  /** Количество видимых строк области текста */
  rows?: number
}
