<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggleTemp from '@examples/src/user-components/ThemeToggleTemp.vue'
</script>

<template>
  <div class="absolute left-0 top-0 grid h-screen w-screen grid-rows-[3rem_auto] overflow-hidden">
    <header class="flex justify-end p-1">
      <ThemeToggleTemp />
    </header>

    <main>
      <nav class="tw-flex">
        <RouterLink :to="{ name: 'main-page' }">Главная страница</RouterLink>
      </nav>

      <RouterView />
    </main>
  </div>
</template>
