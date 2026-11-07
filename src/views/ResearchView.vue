<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { academicItems } from '../content/academicItems'

const researchItems = academicItems.filter(item => item.sectionId === 'research-experience')
</script>

<template>
  <div class="shell page-body">
    <PageIntro eyebrow="Research / Academic Inquiries & Publications" />

    <p class="result-count" aria-live="polite">
      {{ researchItems.length }} {{ researchItems.length === 1 ? 'research project' : 'research projects' }}
    </p>

    <div class="record-list">
      <RouterLink
        v-for="item in researchItems"
        :key="item.slug"
        :to="{ path: `/academic/research-experience/${item.slug}`, query: { from: 'research' } }"
        class="record record-interactive"
        :aria-label="`View details for ${item.title}`"
      >
        <div class="record-meta">
          <p class="eyebrow period-text">{{ item.period }}</p>
          <span class="badge status-pill">{{ item.subtitle || 'Preprint' }}</span>
        </div>

        <div class="record-content">
          <div class="record-header">
            <div>
              <h2 class="research-item-title">{{ item.title }}</h2>
              <p class="author-subline">{{ item.organization }}</p>
            </div>
            <span class="view-indicator" aria-hidden="true">
              View research details ↗
            </span>
          </div>

          <p class="record-summary">{{ item.summary }}</p>

          <div class="tag-list mini-tags">
            <span v-for="tool in (item.tools || [])" :key="tool" class="tag">
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

.period-text {
  font-family: var(--font-label);
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.status-pill {
  margin-left: 0;
  display: inline-flex;
  margin-top: 8px;
  font-size: 0.7rem;
  background: var(--accent);
  color: #FFFFFF;
  border-radius: var(--radius-pill);
  font-family: var(--font-label);
  font-weight: 700;
  padding: 3px 8px;
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

.record-interactive:hover .research-item-title {
  color: var(--accent);
}

.record-interactive:hover .view-indicator {
  color: var(--accent-hover);
  transform: translate(2px, -2px);
}

.record-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
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

.research-item-title {
  font-family: var(--font-headline);
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 850;
  line-height: 1.25;
  color: var(--text);
  letter-spacing: -0.025em;
  transition: color 160ms ease;
}

.author-subline {
  font-family: var(--font-label);
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 600;
  margin-top: 6px;
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
  font-size: 0.98rem;
  color: #404046;
  max-width: 760px;
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
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
