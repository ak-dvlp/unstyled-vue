<script lang="ts" setup>
import UserSwitch from '../user-components/UserSwitch.vue'

import { reactive } from 'vue'

const state = reactive({
  model: '',
  disabled: false,
  error: false,
})
</script>

<template>
  <div class="flex flex-col">
    <UserSwitch v-model="state.disabled" label="disabled" />
    <UserSwitch v-model="state.error" label="error" />

    <UserSwitch v-model="state.model" :disabled="state.disabled" :error="state.error" label="UserSwitch" />
  </div>
</template>
