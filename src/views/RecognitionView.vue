<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { academicItems } from '../content/academicItems'

const awards = academicItems.filter(item => item.sectionId === 'honors-awards')
</script>

<template>
  <div class="shell page-body">
    <PageIntro
      eyebrow="Honours and Awards / Distinctions"
      title="A foundation, kept growing."
      description="Official academic distinctions, competitive engineering awards, merit scholarships, and departmental honors earned across my engineering education."
    />

    <p class="result-count" aria-live="polite" style="margin-top: 24px;">
      {{ awards.length }} distinctions &amp; awards
    </p>

    <div class="record-list" style="margin-top: 24px;">
      <RouterLink
        v-for="item in awards"
        :key="item.slug"
        :to="`/academic/honors-awards/${item.slug}`"
        class="record record-interactive"
        :aria-label="`View details for ${item.title}`"
      >
        <div class="record-meta">
          <p class="eyebrow period-text">{{ item.period }}</p>
          <span class="badge status-pill">{{ item.subtitle || 'Award' }}</span>
        </div>

        <div class="record-content">
          <div class="record-header">
            <div>
              <h2 class="award-item-title">{{ item.title }}</h2>
              <p class="organization-subline">{{ item.organization }}</p>
            </div>
            <span class="view-indicator" aria-hidden="true">
              View award archive ↗
            </span>
          </div>

          <p class="record-summary">{{ item.summary }}</p>

          <div class="tag-list mini-tags" v-if="item.tools && item.tools.length">
            <span v-for="tag in item.tools" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </RouterLink>
    </div>

    <div class="link-row" style="margin-top: 36px;">
      <RouterLink class="text-link" to="/work">
        Featured Projects <span aria-hidden="true">↗</span>
      </RouterLink>
      <RouterLink class="text-link" to="/research">
        Research <span aria-hidden="true">↗</span>
      </RouterLink>
      <RouterLink class="text-link" to="/experience">
        Work <span aria-hidden="true">↗</span>
      </RouterLink>
      <RouterLink class="text-link" to="/cv">
        Academics <span aria-hidden="true">↗</span>
      </RouterLink>
      <RouterLink class="text-link" to="/#contact">
        Get in touch <span aria-hidden="true">↗</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.period-text {
  font-family: var(--mono);
  font-size: 0.95rem;
  color: var(--accent);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.status-pill {
  margin-left: 0;
  display: inline-block;
  margin-top: 8px;
  font-size: 0.72rem;
}

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

.record-interactive:hover .award-item-title {
  color: var(--accent);
}

.record-interactive:hover .view-indicator {
  color: var(--accent);
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

.award-item-title {
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 500;
  line-height: 1.25;
  color: var(--text);
  letter-spacing: -0.015em;
  transition: color 160ms ease;
}

.organization-subline {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 8px;
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
  font-size: 0.98rem;
  color: var(--muted);
  max-width: 760px;
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
