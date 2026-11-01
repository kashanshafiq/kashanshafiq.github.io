<script setup lang="ts">
defineProps<{ eyebrow: string; title?: string; description?: string }>()
</script>
<template>
  <header class="page-intro">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="description" class="intro-text">{{ description }}</p>
    <slot />
  </header>
</template>


