<script lang="ts" setup>
import UserField from '@examples/user-components/UserField.vue'

import { ref } from 'vue'

const md = ref('3')
</script>

<template>
  <UserField v-model="md" />
  <h1>Страница компонента VField 77</h1>
</template>
