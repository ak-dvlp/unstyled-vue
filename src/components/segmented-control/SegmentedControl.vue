<script lang="ts" setup>
export interface SegmentedControlProps {
  /** Ложное значение */
  falseValue?: string | number
  /** Имя */
  name: string
  /** Истинное значение */
  trueValue?: string | number
}

withDefaults(defineProps<SegmentedControlProps>(), {
  name: 'v-toggle',
})

const model = defineModel<string | boolean>()
</script>

<template>
  <div>{{ model }}</div>
</template>
