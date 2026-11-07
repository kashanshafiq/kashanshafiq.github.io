<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <header class="site-header-bar" @keydown.esc="open = false">
    <div class="site-header shell">
      <RouterLink class="wordmark" to="/" aria-label="Portfolio — home">
        Portfolio
      </RouterLink>
      <button
        class="menu-toggle"
        :aria-expanded="open"
        aria-controls="main-navigation"
        @click="open = !open"
      >
        {{ open ? 'Close' : 'Menu' }} <span aria-hidden="true">{{ open ? '−' : '+' }}</span>
      </button>
      <nav id="main-navigation" aria-label="Main navigation" :class="{ open }">
        <RouterLink to="/experience">Work</RouterLink>
        <RouterLink to="/research">Research</RouterLink>
        <RouterLink to="/recognition">Honours and Awards</RouterLink>
        <RouterLink to="/work">Projects</RouterLink>
        <RouterLink to="/community">Extracurriculars</RouterLink>
        <RouterLink to="/cv">Academics</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header-bar {
  width: 100%;
  background: #000000 !important;
  border-bottom: 1px solid #1a1a1a !important;
  position: relative;
  z-index: 40;
}

.site-header {
  border-bottom: none !important;
  background: transparent !important;
}

.wordmark {
  color: #FFFFFF !important;
}

.wordmark:hover {
  color: var(--accent) !important;
}

nav a {
  color: #FFFFFF !important;
  white-space: nowrap;
}

nav a:hover,
nav a.router-link-active {
  color: #FFFFFF !important;
}

.menu-toggle {
  background: #111111 !important;
  border: 1px solid #26262A !important;
  color: #FFFFFF !important;
}

@media (max-width: 960px) {
  nav.open {
    background: #000000 !important;
    border: 1px solid #26262A !important;
  }
  nav.open a {
    color: #FFFFFF !important;
    border-bottom: 1px solid #26262A !important;
  }
}

@media (min-width: 961px) and (max-width: 1280px) {
  nav {
    gap: 18px !important;
  }
}
</style>
