<script lang="ts" setup>
import { computed } from 'vue'

export interface BaseSwitchProps {
  /** Состояние "отключено". */
  disabled?: boolean
  /** Активация промежуточного состояния */
  // indeterminate?: boolean
  /** Ложное значение */
  falseValue?: string | number | null
  /** Ярлык */
  label?: string
  /** Имя */
  name?: string
  /** Состояние "только для чтения" */
  readonly?: boolean
  /** Истинное значение */
  trueValue?: string | number | null
}

const { falseValue, readonly, trueValue } = defineProps<BaseSwitchProps>()

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
    <input class="visually-hidden" :checked="isChecked" :disabled :name :readonly type="checkbox" @change="onChange" />
    <div class="switch__body"></div>
    <span class="switch__label">{{ label }}</span>
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
