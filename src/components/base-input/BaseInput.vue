<script lang="ts" setup>
import type { BaseFieldProps } from '../../types/base-field-props'

export interface BaseInputProps extends BaseFieldProps {
  /** Максимальное значение. */
  max?: number
  /** Минимальное значение. */
  min?: number
  /** Тип. */
  type?: string
}

const { autocomplete = 'off', type = 'text' } = defineProps<BaseInputProps>()

const model = defineModel<string | number | null>()
</script>

<template>
  <input
    :id
    v-model="model"
    :autocomplete
    :disabled
    :max
    :maxlength
    :min
    :minlength
    :name
    :placeholder
    :readonly
    :required
    :type
  />
</template>
