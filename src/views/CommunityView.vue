<script setup lang="ts">
import { computed, ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { academicItems, type AcademicItem } from '../content/academicItems'

const selectedCategory = ref<'all' | 'volunteering' | 'leadership'>('all')

const volunteeringItems = academicItems.filter((i) => i.sectionId === 'volunteering')
const leadershipItems = academicItems.filter((i) => i.sectionId === 'extracurricular')

const allCommunityItems = computed<AcademicItem[]>(() => {
  return [...volunteeringItems, ...leadershipItems]
})

const filteredItems = computed<AcademicItem[]>(() => {
  if (selectedCategory.value === 'volunteering') return volunteeringItems
  if (selectedCategory.value === 'leadership') return leadershipItems
  return allCommunityItems.value
})
</script>

<template>
  <div class="shell page-body community-page">
    <PageIntro
      eyebrow="Volunteering / Community & Leadership"
      title="Engineering begins with people."
      description="Community welfare initiatives, educational outreach, public awareness campaigns, and open academic resources."
    />

    <!-- Filter Category Pills -->
    <div class="community-toolbar">
      <div class="filter-pills" role="tablist" aria-label="Filter community activities">
        <button
          type="button"
          class="pill-btn"
          :class="{ active: selectedCategory === 'all' }"
          @click="selectedCategory = 'all'"
        >
          All Contributions ({{ allCommunityItems.length }})
        </button>
        <button
          type="button"
          class="pill-btn"
          :class="{ active: selectedCategory === 'volunteering' }"
          @click="selectedCategory = 'volunteering'"
        >
          Volunteering ({{ volunteeringItems.length }})
        </button>
        <button
          type="button"
          class="pill-btn"
          :class="{ active: selectedCategory === 'leadership' }"
          @click="selectedCategory = 'leadership'"
        >
          Leadership &amp; Outreach ({{ leadershipItems.length }})
        </button>
      </div>

      <p class="result-count" aria-live="polite">
        {{ filteredItems.length }} {{ filteredItems.length === 1 ? 'activity' : 'activities' }}
      </p>
    </div>

    <!-- Interactive Activity List linking to AcademicDetailView subpages -->
    <div class="record-list">
      <RouterLink
        v-for="(item, index) in filteredItems"
        :key="item.slug"
        :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'community' } }"
        class="record record-interactive"
        :aria-label="`View details for ${item.title}`"
      >
        <div class="record-meta">
          <span class="activity-index">#{{ String(index + 1).padStart(2, '0') }}</span>
          <p class="eyebrow period-text">{{ item.period }}</p>
          <span
            class="badge status-pill"
            :class="{ 'badge-volunteer': item.sectionId === 'volunteering' }"
          >
            {{ item.sectionId === 'volunteering' ? 'VOLUNTEERING' : 'LEADERSHIP' }}
          </span>
          <p v-if="item.subtitle || item.domain" class="location-label">
            {{ item.subtitle || item.domain }}
          </p>
        </div>

        <div class="record-content">
          <div class="record-header">
            <div>
              <h2 class="activity-title">{{ item.title }}</h2>
              <p v-if="item.organization" class="activity-org">{{ item.organization }}</p>
            </div>
            <span class="view-indicator" aria-hidden="true">
              View details ↗
            </span>
          </div>

          <p class="record-summary">{{ item.summary }}</p>

          <div v-if="item.tools && item.tools.length" class="tag-list mini-tags">
            <span v-for="tool in item.tools" :key="tool" class="tag">
              {{ tool }}
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.community-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  margin-bottom: 24px;
}

.filter-pills {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pill-btn {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  padding: 6px 14px;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  cursor: pointer;
  transition: all 160ms ease;
}

.pill-btn:hover {
  border-color: var(--line-strong);
  color: var(--text);
}

.pill-btn.active {
  background: var(--accent-soft);
  border-color: rgba(33, 166, 93, 0.45);
  color: var(--accent-link);
  font-weight: 600;
}

.result-count {
  font-family: var(--mono);
  font-size: var(--text-helper, 0.875rem);
  color: var(--muted);
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.record-interactive {
  text-decoration: none;
  color: inherit;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
  position: relative;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  padding: 28px 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
}

.record-interactive:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.record-interactive:hover .activity-title {
  color: var(--accent);
}

.record-interactive:hover .view-indicator {
  color: var(--accent-link-hover);
  transform: translate(2px, -2px);
}

.record-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.activity-index {
  font-family: var(--mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-link);
}

.period-text {
  font-family: var(--mono);
  font-size: 0.88rem;
  color: var(--text);
  margin: 0;
}

.status-pill {
  font-size: 0.625rem;
  letter-spacing: 0.05em;
  padding: 2px 7px;
  border-radius: 2px;
  border: 1px solid var(--line);
  color: var(--muted);
}

.badge-volunteer {
  color: var(--accent-link);
  border-color: rgba(33, 166, 93, 0.4);
  background: var(--accent-soft);
}

.location-label {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.4;
  margin: 0;
}

.record-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.activity-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 4px 0;
  transition: color 160ms ease;
}

.activity-org {
  font-size: 0.875rem;
  color: var(--muted);
  margin: 0;
}

.view-indicator {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--accent-link);
  white-space: nowrap;
  transition: transform 160ms ease, color 160ms ease;
  flex-shrink: 0;
  padding-top: 4px;
}

.record-summary {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(230, 240, 237, 0.85);
  margin: 0;
}

.tag-list.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

@media (max-width: 860px) {
  .record-interactive {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px 16px;
  }
}
</style>
