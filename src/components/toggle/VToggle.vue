<script lang="ts" setup>
export interface ToggleProps {
  a: string
}

const props = withDefaults(defineProps<ToggleProps>(), {
  a: '',
})

const model = defineModel<string | number | null>()
</script>

<template>
  <textarea v-bind="props" v-model="model" />
</template>
