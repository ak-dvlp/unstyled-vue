<script setup lang="ts">
import type { BaseFieldProps } from '../../types/base-props'

export interface BaseInputProps extends BaseFieldProps {
  /**
   * @ru Максимальное значение.
   * @en Max value.
   */
  max?: number
  /**
   * @ru Минимальное значение.
   * @en Min value.
   */
  min?: number
  /**
   * @ru Тип.
   * @en Type.
   */
  type?: string | null
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
