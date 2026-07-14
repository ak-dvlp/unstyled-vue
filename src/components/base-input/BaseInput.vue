<script setup lang="ts">
import type { BaseInputProps } from '.'

const { autocomplete = 'off', type = 'text' } = defineProps<BaseInputProps>()

const model = defineModel<string | number | null>()
</script>

<template>
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
</template>
