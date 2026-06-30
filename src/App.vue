<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggleTemp from '@examples/user-components/ThemeToggleTemp.vue'
</script>

<template>
  <div class="absolute left-0 top-0 grid h-screen w-screen grid-rows-[40px_1fr] overflow-hidden">
    <header>
      <ThemeToggleTemp />
    </header>
    <main>
      <nav class="tw-flex">
        <RouterLink :to="{ name: 'example-page' }">ExamplePage</RouterLink>
      </nav>

      <RouterView />
    </main>
  </div>
</template>
