<script lang="ts" setup>
import type { BaseFieldProps } from '../../types/base-field-props'

export interface BaseInputProps extends BaseFieldProps {
  /** Максимальное значение */
  max?: number
  /** Максимальное значение */
  min?: number
  /** Тип */
  type?: string
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  autocomplete: 'off',
  type: 'text',
})

const model = defineModel<string | number | null>()
</script>

<template>
  <input v-bind="props" v-model="model" />
</template>
