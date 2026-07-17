<script setup lang="ts">
import type { BaseSwitchProps } from '@/index'

interface ExampleSwitchProps extends BaseSwitchProps {
  /** Наличие ошибки */
  error?: boolean
}

const model = defineModel<string | number | boolean | null | undefined>()

const { disabled, falseValue, label, name, readonly, trueValue } = defineProps<ExampleSwitchProps>()
</script>

<template>
  <BaseSwitch
    v-model="model"
    :classes="{
      // #region example-switch-classes
      root: 'inline-flex cursor-pointer items-center gap-x-1.25 p-0.75 select-none',
      input: 'peer',
      control:
        'ease bg-my-switch-body block h-2 w-6.25 min-w-6.25 rounded-full transition-all duration-150 peer-checked:bg-blue-500 after:relative after:top-[-0.15rem] after:left-0 after:block after:h-3.25 after:w-3.25 after:rounded-full after:border after:border-slate-400 after:bg-white after:transition-all after:duration-200 after:ease-linear peer-checked:after:left-3',
      label: 'text-my-label',
      // #endregion example-switch-classes
    }"
    :disabled
    :false-value
    :label
    :name
    :readonly
    :true-value
  />
</template>
