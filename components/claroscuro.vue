<template>
  <div class="gap-2">
    <select
      id="theme"
      v-model="theme"
      @change="applyTheme"
      class="px-2 py-1"
    >
      <option value="system">💻</option>
      <option value="light">☀</option>
      <option value="dark">🌑</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const theme = ref('system')

onMounted(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved) theme.value = saved
    applyTheme()

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (theme.value === 'system') applyTheme()
    })
  }
})

const applyTheme = () => {
  if (typeof window === 'undefined') return

  const root = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const finalTheme =
    theme.value === 'system'
      ? prefersDark
        ? 'dark'
        : 'light'
      : theme.value

  root.classList.remove('light', 'dark')
  root.classList.add(finalTheme)
  root.style.colorScheme = finalTheme

  localStorage.setItem('theme', theme.value)
}

watch(theme, applyTheme)
</script>


<style scoped>
option{
  background-color: light-dark(white, #6a7282);
  border: none
}

</style>
