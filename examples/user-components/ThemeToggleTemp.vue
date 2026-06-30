<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

function saveAndApply(dark: boolean) {
  isDark.value = dark
  localStorage.setItem('theme', dark ? 'dark' : 'light')

  const html = document.documentElement
  html.classList.remove('theme-light', 'theme-dark')
  html.classList.add(dark ? 'theme-dark' : 'theme-light')
}

function toggleTheme() {
  saveAndApply(!isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || saved === 'light') {
    saveAndApply(saved === 'dark')
    return
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  saveAndApply(prefersDark)
})
</script>

<template>
  <button
    class="rounded-lg p-2 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:hover:bg-slate-800"
    @click="toggleTheme"
  >
    <span aria-hidden="true">{{ isDark ? '🌙' : '☀️' }}</span>
  </button>
</template>
