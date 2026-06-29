<script lang="ts" setup>
import type { BaseInputProps } from '../base.props'

export interface VInputProps extends BaseInputProps {
  /** Максимальное значение */
  max?: number
  /** Максимальное значение */
  min?: number
  /** Тип */
  type?: string
}

const props = withDefaults(defineProps<VInputProps>(), {
  autocomplete: 'off',
  type: 'text',
})

const model = defineModel<string | number | null>()
</script>

<template>
  <input v-bind="props" v-model="model" />
</template>
