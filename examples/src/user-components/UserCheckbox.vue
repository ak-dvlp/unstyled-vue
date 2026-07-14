<script setup lang="ts">
import type { BaseCheckboxProps } from '@/index'

interface UserCheckboxProps extends BaseCheckboxProps {
  error?: boolean
}

const { disabled, falseValue, label, name, readonly, trueValue } = defineProps<UserCheckboxProps>()

const model = defineModel<string | number | boolean | null | undefined>()
</script>

<template>
  <BaseCheckbox
    v-model="model"
    :classes="{
      // #region user-checkbox-template
      root: 'border-brand-3 hover:bg-brand-3/10 has-checked:border-brand-3 has-checked:bg-brand-3/30 inline-flex w-fit max-w-sm cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors duration-150 select-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40',
      control: 'border-brand-3 accent-brand-3 h-4 w-4 cursor-pointer rounded disabled:cursor-not-allowed',
      label: 'text-brand-3 group-hover:text-brand-3 text-sm font-medium transition-colors duration-150',
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
