<script setup lang="ts">
import { useCheckbox } from '../../composables/useCheckbox'
import type { BaseCheckboxProps } from '../../types/base-props'

// #region base-checkbox-model
const model = defineModel<string | number | boolean | null>()
// #endregion base-checkbox-model

const {
  classes: ui = {},
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
  <label :class="ui?.root">
    <input :checked="isChecked" :class="ui?.control" :disabled :name :readonly type="checkbox" @change="onChange" />
    <span :class="ui?.label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
