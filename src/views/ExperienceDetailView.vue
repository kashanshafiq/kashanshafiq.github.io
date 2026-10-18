<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const slugMap: Record<string, string> = {
  'archnetix-bim-modeler': 'archnetix-scan-to-bim',
  'mount-khalid-bim-intern': 'mount-khalid-high-rise-bim',
  'simco-trainee-engineer': 'resolve-nstp-tower-intern',
  'simco-site-engineering-intern': 'resolve-nstp-tower-intern',
  'resolve-nstp-trainee-engineer': 'resolve-nstp-tower-intern',
  'resolve-nstp-tower-intern': 'resolve-nstp-tower-intern',
}

onMounted(() => {
  const targetSlug = slugMap[route.params.slug as string] || route.params.slug
  router.replace(`/academic/work-experience/${targetSlug}`)
})
</script>

<template>
  <div class="shell page-body" style="min-height: 50vh; display: flex; align-items: center; justify-content: center;">
    <p>Loading work details...</p>
  </div>
</template>
