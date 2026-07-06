<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type CurrentTheme = 'light' | 'dark' | 'system'

const currentTheme = ref<CurrentTheme>('system')

function saveAndApply(theme: CurrentTheme) {
  currentTheme.value = theme
  localStorage.setItem('currentTheme', theme === 'system' ? 'system' : theme)

  const html = document.documentElement
  html.classList.remove('theme-light', 'theme-dark')

  if (theme !== 'system') {
    html.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
  }
}

function toggleTheme() {
  if (currentTheme.value === 'system') {
    saveAndApply('light')
  } else if (currentTheme.value === 'light') {
    saveAndApply('dark')
  } else {
    saveAndApply('system')
  }
}

const isDarkSystem = ref(false)
const mq = window.matchMedia('(prefers-color-scheme: dark)')

function onThemeChange(evt: MediaQueryListEvent) {
  isDarkSystem.value = evt.matches
}

onMounted(() => {
  isDarkSystem.value = mq.matches

  const saved = localStorage.getItem('currentTheme')

  if (saved === 'light' || saved === 'dark') {
    saveAndApply(saved)
  } else {
    saveAndApply('system')
  }

  mq.addEventListener('change', onThemeChange)
})

onBeforeUnmount(() => mq.removeEventListener('change', onThemeChange))
</script>

<template>
  <button
    class="hover:bg-card cursor-pointer rounded-lg p-2 transition-colors focus:ring-2 focus:ring-slate-500 focus:outline-none"
    :class="{
      'hover:bg-theme-dark': currentTheme === 'light' || (currentTheme === 'dark' && isDarkSystem),
      'hover:bg-theme-light': currentTheme === 'system' || (currentTheme === 'dark' && !isDarkSystem),
    }"
    @click="toggleTheme"
  >
    <span aria-hidden="true">
      {{ currentTheme === 'dark' ? '🌙' : currentTheme === 'light' ? '☀️' : '🌗' }}
    </span>
  </button>
</template>
