<script setup lang="ts">
import { computed } from 'vue'

import type { BaseCheckboxProps } from '../../types/base-props'

const { disabled, falseValue, readonly, trueValue } = defineProps<BaseCheckboxProps>()

const model = defineModel<boolean | string | number | null>()

const isChecked = computed(() => {
  if (trueValue || falseValue) {
    if (model.value === trueValue) {
      return true
    } else if (model.value === falseValue) {
      return false
    } else {
      return false
    }
  } else if (typeof model.value === 'boolean') {
    return model.value
  } else {
    return false
  }
})

function onChange(evt: Event) {
  const { checked } = evt.target as HTMLInputElement

  if (trueValue || falseValue) {
    if (checked) {
      if (trueValue) {
        model.value = trueValue
      } else {
        model.value = true
      }
    } else {
      if (falseValue) {
        model.value = falseValue
      } else {
        model.value = false
      }
    }
  } else {
    model.value = checked
  }
}
</script>

<template>
  <label class="switch">
    <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
    <div class="switch__body"></div>
    <span class="switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.visually-hidden {
  position: absolute;
  opacity: 0;
  clip-path: inset(50%);
  margin: -1px;
  border: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
