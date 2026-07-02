<script lang="ts" setup>
import { RouterView } from 'vue-router'
import ThemeToggle from '@examples/src/user-components/ThemeToggle.vue'
</script>

<template>
  <div class="absolute left-0 top-0 grid h-screen w-screen grid-rows-[3rem_auto] overflow-hidden">
    <header class="shadow-card flex p-1">
      <ThemeToggle />
    </header>

    <main class="p-3.75">
      <!-- <nav class="tw-flex">
        <RouterLink :to="{ name: 'main-page' }">Главная страница</RouterLink>
      </nav> -->

      <RouterView />
    </main>
  </div>
</template>
