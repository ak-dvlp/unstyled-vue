<script lang="ts" setup>
import { onMounted } from 'vue'
import type { BaseFieldProps } from '../../types/base-field-props'

export interface BaseTextareaProps extends BaseFieldProps {
  /** Автоматическое исправление орфографических ошибок */
  autocorrect?: 'on' | 'off'
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Поле ввода должно быть заполнено */
  required?: boolean
  /** Количество видимых строк области текста. */
  rows?: number
}

const props = withDefaults(defineProps<BaseTextareaProps>(), {
  autocomplete: 'off',
  autocorrect: 'off',
})

const { rows } = props

onMounted(() => {
  if (rows && typeof rows === 'number' && rows <= 0) {
    console.warn('Значение свойства rows компонента Textarea должно быть положительным числом не равным нулю.')
  }
})

const model = defineModel<string | number | null>()
</script>

<template>
  <textarea v-bind="props" v-model="model" />
</template>
