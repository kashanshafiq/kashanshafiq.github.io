<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const slugMap: Record<string, string> = {
  'bim-to-ar': 'bim-to-ar-research',
}

onMounted(() => {
  const targetSlug = slugMap[route.params.slug as string] || route.params.slug
  router.replace(`/academic/research-experience/${targetSlug}`)
})
</script>

<template>
  <div class="shell page-body" style="min-height: 50vh; display: flex; align-items: center; justify-content: center;">
    <p>Loading research details...</p>
  </div>
</template>
