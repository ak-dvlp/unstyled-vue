<script setup lang="ts">
import type { BaseToggleProps } from '.'

const { name } = defineProps<BaseToggleProps>()

const model = defineModel<string | boolean>()
</script>

<template>
  <div>{{ model }}</div>
</template>
