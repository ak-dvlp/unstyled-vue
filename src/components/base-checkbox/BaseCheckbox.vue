<script setup lang="ts">
import { useCheckbox } from '../../composables/useCheckbox'
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

const { isChecked, onChange } = useCheckbox(
  model,
  () => trueValue,
  () => falseValue,
)
</script>

<template>
  <label class="checkbox">
    <input :checked="isChecked" class="checkbox__body" :disabled :name :readonly type="checkbox" @change="onChange" />
    <span class="checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
