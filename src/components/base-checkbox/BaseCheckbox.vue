<script setup lang="ts">
import { computed } from 'vue'

import type { BaseCheckboxProps } from '../../types/base-props'

// #region base-checkbox-model
const model = defineModel<string | number | boolean | null>()
// #endregion base-checkbox-model

const {
  disabled = false,
  falseValue = false,
  label = '',
  name = undefined,
  readonly = false,
  trueValue = true,
} = defineProps<BaseCheckboxProps>()

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
  <label class="checkbox">
    <input :checked="isChecked" class="checkbox__body" :disabled :name :readonly type="checkbox" @change="onChange" />
    <span class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
