<script setup lang="ts">
import type { BaseInputModel, BaseInputProps } from '.'

const model = defineModel<BaseInputModel>()

const {
  autocomplete = 'off',
  disabled = false,
  id = undefined,
  max = undefined,
  maxlength = undefined,
  min = undefined,
  minlength = undefined,
  name = undefined,
  placeholder = undefined,
  readonly = false,
  required = false,
  type = 'text',
} = defineProps<BaseInputProps>()
</script>

<template>
  <!-- #region base-input-template -->
  <input
    :id
    v-model="model"
    :autocomplete
    :disabled
    :max
    :maxlength
    :min
    :minlength
    :name
    :placeholder
    :readonly
    :required
    :type
  />
  <!-- #endregion base-input-template -->
</template>
