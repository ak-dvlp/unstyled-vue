<script setup lang="ts">
import type { SegmentedControlProps } from '.'

const { name } = defineProps<SegmentedControlProps>()

const model = defineModel<string | boolean>()
</script>

<template>
  <div>{{ model }}</div>
</template>
