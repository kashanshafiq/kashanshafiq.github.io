<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { academicItems } from '../content/academicItems'

const workExperience = academicItems.filter(item => item.sectionId === 'work-experience')
</script>

<template>
  <div class="shell page-body">
    <PageIntro
      eyebrow="Work / Professional practice"
      title="From drawings to real conditions."
      description="Experience across BIM modelling, construction workflows and site engineering. Select any role below to view responsibilities, technical workflows, and deliverables in detail."
    />

    <div class="record-list">
      <RouterLink
        v-for="item in workExperience"
        :key="item.slug"
        :to="{ path: `/academic/work-experience/${item.slug}`, query: { from: 'experience' } }"
        class="record record-interactive"
        :aria-label="`View details for ${item.title} at ${item.organization}`"
      >
        <div class="record-meta">
          <p class="eyebrow">{{ item.period }}</p>
          <p class="location-label">{{ item.subtitle || item.domain }}</p>
        </div>

        <div class="record-content">
          <div class="record-header">
            <div>
              <h2>{{ item.organization }}</h2>
              <h3>{{ item.title }}</h3>
            </div>
            <span class="view-indicator" aria-hidden="true">
              View details ↗
            </span>
          </div>

          <p class="record-summary">{{ item.summary }}</p>

          <div class="tag-list mini-tags">
            <span v-for="tool in (item.tools || []).slice(0, 4)" :key="tool" class="tag">
              {{ tool }}
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.record-interactive {
  text-decoration: none;
  color: inherit;
  transition: background-color 160ms ease, border-color 160ms ease;
  position: relative;
  display: grid;
  padding: 32px 18px;
  border-radius: 2px;
}

.record-interactive:hover {
  background: var(--surface);
}

.record-interactive:hover h2 {
  color: var(--accent);
}

.record-interactive:hover .view-indicator {
  color: var(--accent);
  transform: translate(2px, -2px);
}

.record-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.location-label {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.record-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.view-indicator {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--line-strong);
  white-space: nowrap;
  transition: transform 160ms ease, color 160ms ease;
  padding-top: 6px;
}

.record-summary {
  font-size: 1rem;
  color: var(--muted);
  max-width: 720px;
}

.mini-tags {
  margin-top: 6px;
}

@media (max-width: 760px) {
  .record-header {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
