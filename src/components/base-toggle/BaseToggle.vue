<script setup lang="ts">
export interface BaseToggleProps {
  /** Ложное значение */
  falseValue?: string | number
  /** Имя */
  name: string
  /** Истинное значение */
  trueValue?: string | number
}

withDefaults(defineProps<BaseToggleProps>(), {
  name: 'v-toggle',
})

const model = defineModel<string | boolean>()
</script>

<template>
  <div>{{ model }}</div>
</template>
