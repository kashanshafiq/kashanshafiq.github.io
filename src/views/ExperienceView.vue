<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { academicItems } from '../content/academicItems'

const workExperience = academicItems.filter(item => item.sectionId === 'work-experience')
</script>

<template>
  <div class="shell page-body">
    <PageIntro eyebrow="Work / Professional practice" />

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
.record-list {
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.record-interactive {
  text-decoration: none;
  color: inherit;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease, box-shadow 180ms ease;
  position: relative;
  display: grid;
  padding: 28px 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  border-radius: var(--radius-card);
}

.record-interactive:hover {
  background: var(--surface-raised);
  border-color: var(--line-strong);
  border-top-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-dark);
}

.record-interactive:hover h2 {
  color: var(--accent);
}

.record-interactive:hover .view-indicator {
  color: var(--accent-hover);
  transform: translate(2px, -2px);
}

.record-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.location-label {
  font-family: var(--font-label);
  font-size: 0.75rem;
  font-weight: 600;
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

.record-header h2 {
  font-family: var(--font-headline);
  font-size: 1.35rem;
  font-weight: 850;
  letter-spacing: -0.02em;
}

.record-header h3 {
  font-family: var(--font-headline);
  font-size: 1.05rem;
  font-weight: 750;
  color: var(--accent);
  margin-top: 4px;
}

.view-indicator {
  font-family: var(--font-headline);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
  transition: transform 160ms ease, color 160ms ease;
  padding-top: 6px;
}

.record-summary {
  font-size: 0.95rem;
  color: var(--muted);
  max-width: 720px;
  line-height: 1.6;
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
