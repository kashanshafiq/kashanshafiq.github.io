<script setup lang="ts">
import { computed, ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { projects } from '../content/projects'
import type { Project } from '../types/content'

const selectedCategory = ref('All')
const categories = ['All', 'Featured Projects']

function matchesCategory(project: Project, cat: string): boolean {
  if (cat === 'All') return true
  if (cat === 'Featured Projects') return !!project.featured
  return true
}

function getBadge(project: Project): { label: string; isPrimary: boolean } {
  if (project.featured) {
    return { label: 'FEATURED', isPrimary: true }
  }
  return { label: (project.categoryBadge || project.category).toUpperCase(), isPrimary: false }
}

const filtered = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => matchesCategory(p, selectedCategory.value))
})

function reset() {
  selectedCategory.value = 'All'
}
</script>

<template>
  <div class="shell page-body">
    <PageIntro
      eyebrow="Projects / Engineering Archive &amp; Case Studies"
      title="Engineering in practice."
      description="Engineering projects across structural design, building information modeling, quantity estimation, and environmental engineering."
    />

    <!-- Filter Controls Row (matches Honours & Awards section) -->
    <div class="filter-controls-row">
      <div class="filter-group" aria-label="Filter projects">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="filter-button"
          :aria-pressed="selectedCategory === cat"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <p class="result-count" aria-live="polite">
        {{ filtered.length }} {{ filtered.length === 1 ? 'project' : 'projects' }}
      </p>
    </div>

    <!-- Compact 4 in a row project grid (pure information, matching Honours & Awards) -->
    <div v-if="filtered.length" class="project-grid">
      <RouterLink
        v-for="project in filtered"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="project-card"
        :aria-label="`View case study for ${project.title}`"
      >
        <!-- Card Header: Index, Category Badge, and Year -->
        <div class="card-header">
          <div class="header-left">
            <span class="card-index">#{{ String(projects.findIndex(p => p.slug === project.slug) + 1).padStart(2, '0') }}</span>
            <span class="card-badge" :class="{ 'badge-primary': getBadge(project).isPrimary }">
              {{ getBadge(project).label }}
            </span>
          </div>
          <span class="card-period">{{ project.period }}</span>
        </div>

        <!-- Eyebrow Subtitle -->
        <p class="card-eyebrow">{{ project.subtitle || project.category }}</p>

        <!-- Title -->
        <h2 class="card-title">{{ project.title }}</h2>

        <!-- Organization / Institution -->
        <p class="card-org">{{ project.organization || 'COMSATS University Islamabad' }}</p>

        <!-- Summary Description -->
        <p class="card-desc">{{ project.summary }}</p>

        <!-- Subtle Card Divider -->
        <div class="card-divider" aria-hidden="true"></div>

        <!-- Footer: Tags + Arrow Link -->
        <div class="card-footer-row">
          <div class="card-tags">
            <span
              v-for="tool in (project.tools || []).slice(0, 2)"
              :key="tool"
              class="tag-pill"
            >
              {{ tool }}
            </span>
          </div>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
      </RouterLink>
    </div>

    <div v-else class="empty-state">
      <h2>No projects found in this category.</h2>
      <p>Select another category or view all projects.</p>
      <button class="button" @click="reset">Show all projects</button>
    </div>
  </div>
</template>

<style scoped>
/* Page Intro font size override & gap elimination - matches Volunteering (Second Image Reference) */
:deep(.page-intro) {
  padding-block: 20px 8px;
  max-width: 100%;
}

:deep(.page-intro h1) {
  font-size: clamp(1.5rem, 2vw + 0.4rem, 2.15rem);
  font-weight: 600;
  line-height: 1.26;
  letter-spacing: -0.015em;
  margin-top: 6px;
  margin-bottom: 0;
  max-width: 100%;
}

:deep(.intro-text) {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.5;
  max-width: var(--prose-max-width, 68ch);
}

/* ==========================================================================
   FILTER CONTROLS ROW (MATCHING HONOURS & AWARDS)
   ========================================================================== */
.filter-controls-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
  margin-bottom: 22px;
}

.filter-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-button {
  padding: 8px 16px;
  min-height: 38px;
  font-size: 0.85rem;
  font-family: var(--sans);
  font-weight: 500;
  line-height: 1.40;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  border-radius: 2px;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
}

.filter-button:hover {
  border-color: var(--accent);
}

.filter-button[aria-pressed=true] {
  background: var(--accent-primary);
  color: var(--text-on-primary);
  border-color: var(--accent-primary-border);
}

.result-count {
  font-family: var(--mono);
  font-size: var(--text-helper, 0.875rem);
  color: var(--muted);
  margin: 0;
}

/* ==========================================================================
   PROJECTS COMPACT 4-IN-A-ROW GRID
   ========================================================================== */
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  align-items: stretch;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  padding: 18px 16px 16px;
  border-radius: var(--radius-card);
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: border-color 180ms ease, transform 160ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  border-color: var(--line-strong);
  border-top-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-card-dark);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-index {
  font-family: var(--font-headline);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--accent);
}

.card-badge {
  font-family: var(--font-label);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: var(--radius-pill);
  color: var(--muted);
  border: 1px solid var(--line);
  background: var(--surface-raised);
  white-space: nowrap;
}

.card-badge.badge-primary {
  color: #FFFFFF;
  border: none;
  background: var(--accent);
}

.card-period {
  font-family: var(--font-label);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.card-eyebrow {
  font-family: var(--font-label);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title {
  font-family: var(--font-headline);
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 6px 0;
  min-height: 2.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 160ms ease;
}

.project-card:hover .card-title {
  color: var(--accent);
}

.card-org {
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--muted);
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 4px;
}

.card-desc {
  font-size: 0.8125rem;
  line-height: 1.45;
  color: #404046;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.9em;
  text-align: justify;
  text-justify: inter-word;
}

.card-divider {
  border-top: 1px solid var(--line);
  margin-top: auto;
  margin-bottom: 10px;
}

.card-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  flex: 1;
  min-width: 0;
}

.tag-pill {
  font-family: var(--font-label);
  font-size: 0.64rem;
  font-weight: 700;
  padding: 2.5px 7px;
  background: rgba(216, 21, 27, 0.08);
  border: 1px solid rgba(216, 21, 27, 0.28);
  border-radius: var(--radius-pill);
  color: var(--accent);
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-arrow {
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 700;
  transition: transform 160ms ease, color 160ms ease;
  flex-shrink: 0;
}

.project-card:hover .card-arrow {
  transform: translate(2px, -2px);
  color: var(--accent-hover);
}

/* ==========================================================================
   EMPTY STATE
   ========================================================================== */
.empty-state {
  padding: 48px;
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  background: var(--surface);
  text-align: center;
  border-radius: var(--radius-card);
  margin-top: 24px;
}

.empty-state h2 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.empty-state p {
  color: var(--muted);
  margin-bottom: 20px;
}

/* Responsive Queries */
@media (max-width: 1140px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}

@media (max-width: 680px) {
  .project-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
