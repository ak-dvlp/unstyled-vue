<script setup lang="ts">
import type { BaseCheckboxProps } from '@/index'

interface ExampleCheckboxProps extends BaseCheckboxProps {
  /** Наличие ошибки */
  error?: boolean
}

const { disabled, falseValue, label, name, readonly, trueValue } = defineProps<ExampleCheckboxProps>()

const model = defineModel<string | number | boolean | null | undefined>()
</script>

<template>
  <BaseCheckbox
    v-model="model"
    :classes="{
      // #region user-checkbox-template
      root: 'border-my-label bg-my-label/10 has-checked:border-my-label inline-flex w-fit max-w-sm cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors duration-150 select-none hover:bg-transparent',
      control: 'border-my-label accent-my-label h-4 w-4 cursor-pointer rounded',
      label: 'text-my-label group-hover:text-my-label text-sm font-medium transition-colors duration-150',
      // #endregion user-checkbox-template
    }"
    :disabled
    :false-value
    :label
    :name
    :readonly
    :true-value
  />
</template>
