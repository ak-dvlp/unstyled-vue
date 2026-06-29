<script lang="ts" setup>
export interface VToggleProps {
  a: string
}

const props = withDefaults(defineProps<VToggleProps>(), {
  a: '',
})

const model = defineModel<string | number | null>()
</script>

<template>
  <textarea v-bind="props" v-model="model" />
</template>
