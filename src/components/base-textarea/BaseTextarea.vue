<script setup lang="ts">
import { onMounted } from 'vue'

import type { BaseTextareaProps } from '.'

// #region base-textarea-model
const model = defineModel<string | number | null>()
// #endregion base-textarea-model

const {
  autocomplete = 'off',
  autocorrect = 'off',
  disabled = false,
  id = undefined,
  maxlength = undefined,
  minlength = undefined,
  name = undefined,
  placeholder = undefined,
  readonly = false,
  required = false,
  rows = undefined,
} = defineProps<BaseTextareaProps>()

onMounted(() => {
  if (rows && typeof rows === 'number' && rows <= 0) {
    console.warn('Значение свойства rows компонента Textarea должно быть положительным числом не равным нулю.')
  }
})
</script>

<template>
  <!-- #region base-textarea-template -->
  <textarea
    :id
    v-model="model"
    :autocomplete
    :autocorrect
    :disabled
    :maxlength
    :minlength
    :name
    :placeholder
    :readonly
    :required
    :rows
  />
  <!-- #endregion base-textarea-template -->
</template>
