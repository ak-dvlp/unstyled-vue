<script setup lang="ts">
import type { BaseInputProps } from '.'

// #region base-input-model
const model = defineModel<string | number | null>()
// #endregion base-input-model

const { autocomplete = 'off', type = 'text' } = defineProps<BaseInputProps>()
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
