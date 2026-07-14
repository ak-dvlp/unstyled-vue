<script setup lang="ts">
import type { BaseCheckboxProps } from '@/index'

interface UserCheckboxProps extends BaseCheckboxProps {
  error?: boolean
}

const { disabled, falseValue, label, name, readonly, trueValue } = defineProps<UserCheckboxProps>()

const model = defineModel<string | number | boolean | null | undefined>()

// const checkedTrackBackgroundColor = computed(() => {
//   if (disabled) return 'var(--color-disabled)'
//   if (error) return 'var(--color-error)'
//   return 'var(--color-primary)'
// })

// const thumbBackground = computed(() => {
//   if (disabled) return 'var(--color-disabled)'
//   return 'var(--color-switch-body)'
// })
// brand-3

// const userCheckboxClasses = {
//   root: 'inline-flex items-center gap-3 w-fit max-w-sm p-4 rounded-xl border border-slate-200 select-none cursor-pointer transition-colors duration-150 group hover:bg-slate-50 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/30 has-[:disabled]:opacity-40 has-[:disabled]:cursor-not-allowed dark:border-slate-800 dark:hover:bg-slate-900/40 dark:has-[:checked]:border-blue-500/70 dark:has-[:checked]:bg-blue-950/20',
//   control:
//     'w-4 h-4 rounded border-slate-300 bg-white accent-blue-600 cursor-pointer disabled:cursor-not-allowed dark:border-slate-600 dark:bg-slate-950',
//   label:
//     'text-sm font-medium text-slate-700 transition-colors duration-150 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-slate-100',
// }
</script>

<template>
  <!-- <div class="user-checkbox"> -->
  <BaseCheckbox
    v-model="model"
    :classes="{
      root: 'border-brand-3 hover:bg-brand-3/10 has-checked:border-brand-3 has-checked:bg-brand-3/30 inline-flex w-fit max-w-sm cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors duration-150 select-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-40',
      control:
        'border-brand-3 accent-brand-3 h-4 w-4 cursor-pointer rounded disabled:cursor-not-allowed',
      label:
        'text-brand-3 group-hover:text-brand-3 text-sm font-medium transition-colors duration-150',
    }"
    :disabled
    :false-value
    :label
    :name
    :readonly
    :true-value
  />
  <!-- </div> -->
</template>

<!-- <style scoped>
.user-switch input[type='checkbox']:checked + .switch__body {
  background-color: v-bind(checkedTrackBackgroundColor);
}

.user-switch .switch__body::after {
  background: v-bind(thumbBackground);
}
</style> -->
