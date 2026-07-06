<script setup lang="ts">
import { computed } from 'vue'

import type { BaseSwitchProps } from '@/index'

interface UserSwitchProps extends BaseSwitchProps {
  /** Наличие ошибки */
  error?: boolean
}

const { disabled, error } = defineProps<UserSwitchProps>()

const model = defineModel<string | number | boolean | null | undefined>()

const checkedTrackBackgroundColor = computed(() => {
  if (disabled) return 'var(--color-disabled)'
  if (error) return 'var(--color-error)'
  return 'var(--color-primary)'
})

const thumbBackground = computed(() => {
  if (disabled) return 'var(--color-disabled)'
  return 'var(--color-switch-body)'
})
</script>

<template>
  <div class="user-switch">
    <BaseSwitch v-model="model" :disabled :false-value :label :name :readonly :trueValue />
  </div>
</template>

<style>
.user-switch input[type='checkbox']:checked + .switch__body {
  background-color: v-bind(checkedTrackBackgroundColor);
}

.user-switch .switch__body::after {
  background: v-bind(thumbBackground);
}
</style>
