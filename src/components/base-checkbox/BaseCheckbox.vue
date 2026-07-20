<script setup lang="ts">
import type { BaseCheckboxModel, BaseCheckboxProps } from '.'

const {
  ariaDescribedby = undefined,
  ariaInvalid = undefined,
  ariaLabel = undefined,
  classes = undefined,
  disabled = false,
  falseValue = false,
  label = '',
  name = undefined,
  readonly = false,
  required = false,
  trueValue = true,
} = defineProps<BaseCheckboxProps>()

const model = defineModel<BaseCheckboxModel>({
  get(value) {
    return value === trueValue
  },
  set(value: BaseCheckboxModel) {
    if (readonly) {
      return model.value
    }

    const isChecked = !!value

    return isChecked ? trueValue : falseValue
  },
})
</script>

<template>
  <!-- #region base-checkbox-template -->
  <label :class="classes?.root" @click="readonly ? $event.preventDefault() : null">
    <input
      v-model="model"
      :aria-describedby
      :aria-invalid
      :aria-label
      :aria-readonly="readonly"
      :class="classes?.input"
      :disabled
      :name
      :required
      type="checkbox"
      @keydown.space="readonly ? $event.preventDefault() : null"
    />

    <slot name="control"></slot>

    <span :class="classes?.label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <!-- #endregion base-checkbox-template -->
</template>
