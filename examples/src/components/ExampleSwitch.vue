<script setup lang="ts">
import type { BaseSwitchProps } from '@/index'

interface ExampleSwitchProps extends BaseSwitchProps {
  /** Наличие ошибки */
  error?: boolean
}

const { disabled, falseValue, label, name, readonly, trueValue } = defineProps<ExampleSwitchProps>()

const model = defineModel<string | number | boolean | null | undefined>()
</script>

<template>
  <BaseSwitch
    v-model="model"
    :classes="{
      // #region example-switch-template
      root: 'peer inline-flex cursor-pointer items-center gap-x-1.25 p-0.75 select-none',
      input: 'peer',
      control:
        'ease bg-switch-body block h-2 w-6.25 min-w-6.25 rounded-full transition-all duration-150 peer-checked:bg-blue-500 after:relative after:top-[-0.15rem] after:left-0 after:block after:h-3.25 after:w-3.25 after:rounded-full after:border after:border-slate-400 after:bg-white after:transition-all after:duration-200 after:ease-linear peer-checked:after:left-3',
      label: 'text-my-label',
      // #region example-switch-template
    }"
    :disabled
    :false-value
    :label
    :name
    :readonly
    :true-value
  />
</template>
