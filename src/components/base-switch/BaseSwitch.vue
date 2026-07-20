<script setup lang="ts">
import { useCheckbox } from '../../composables/useCheckbox'
import type { BaseCheckboxProps } from '../base-checkbox/index'

// #region base-switch-model
const model = defineModel<string | number | boolean | null>()
// #endregion base-switch-model

const {
  classes = undefined,
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
  <!-- #region base-switch-template -->
  <label :class="classes?.root">
    <input
      :checked="isChecked"
      class="base-switch--visually-hidden"
      :class="classes?.input"
      :disabled
      :name
      :readonly
      type="checkbox"
      @change="onChange"
    />

    <div :class="classes?.control">
      <slot name="icon"></slot>
    </div>

    <span :class="classes?.label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <!-- #endregion base-switch-template -->
</template>

<style scoped>
/* #region base-switch-style */
.base-switch--visually-hidden {
  position: absolute;
  clip-path: inset(50%);
  margin: -1px;
  border-width: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}
/* #endregion base-switch-style */
</style>
