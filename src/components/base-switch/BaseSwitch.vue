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
    <input :checked="isChecked" class="visually-hidden" :disabled :name :readonly type="checkbox" @change="onChange" />
    <div :class="ui?.control"></div>
    <span :class="ui?.label">
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
