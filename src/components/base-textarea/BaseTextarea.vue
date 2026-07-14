<script setup lang="ts">
import { onMounted } from 'vue'

import type { BaseTextareaProps } from '.'

const { autocomplete = 'off', autocorrect = 'off', rows } = defineProps<BaseTextareaProps>()

onMounted(() => {
  if (rows && typeof rows === 'number' && rows <= 0) {
    console.warn('Значение свойства rows компонента Textarea должно быть положительным числом не равным нулю.')
  }
})

const model = defineModel<string | number | null>()
</script>

<template>
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
</template>
