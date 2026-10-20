<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { projects } from '../content/projects'
</script>

<template>
  <div class="shell page-body">
    <PageIntro
      eyebrow="Featured Projects / Engineering Case Studies"
      title="Selected engineering projects across structural design, building quantity estimation, and construction planning."
    />

    <p class="result-count" aria-live="polite">
      {{ projects.length }} projects
    </p>

    <!-- Compact 4 in a row project grid (pure information, matching Honours & Awards) -->
    <div class="project-grid">
      <RouterLink
        v-for="(project, index) in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="project-card"
        :aria-label="`View case study for ${project.title}`"
      >
        <!-- Card Header: Index #01, Category Badge, and Year -->
        <div class="card-header">
          <div class="header-left">
            <span class="card-index">#{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="card-badge" :class="{ 'badge-primary': index === 0 }">
              {{ project.category.toUpperCase() }}
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
  </div>
</template>

<style scoped>
/* Page Intro font size override - matches Honours & Awards and utilizes full horizontal space */
:deep(.page-intro) {
  padding-block: 20px 10px;
  max-width: 100%;
}

:deep(.page-intro h1) {
  font-size: clamp(1.2rem, 1.3vw + 0.45rem, 1.5rem);
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.015em;
  margin-top: 4px;
  margin-bottom: 0;
  max-width: 100%;
  width: 100%;
}

@media (min-width: 1180px) {
  :deep(.page-intro h1) {
    white-space: nowrap;
  }
}

.result-count {
  font-family: var(--mono);
  font-size: var(--text-helper, 0.875rem);
  color: var(--muted);
  margin: 14px 0 16px;
}

/* ==========================================================================
   FEATURED PROJECTS COMPACT 4-IN-A-ROW GRID
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
  padding: 16px 15px 14px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: border-color 180ms ease, transform 160ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
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
  gap: 7px;
}

.card-index {
  font-family: var(--mono);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-link);
}

.card-badge {
  font-family: var(--mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 2px;
  color: var(--muted);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  white-space: nowrap;
}

.card-badge.badge-primary {
  color: var(--accent-link);
  border: 1px solid rgba(33, 166, 93, 0.45);
  background: var(--accent-soft);
}

.card-period {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.card-eyebrow {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: rgba(181, 195, 191, 0.7);
  margin: 0 0 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title {
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.32;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 6px 0;
  min-height: 2.64em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  margin: 0 0 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-desc {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: rgba(230, 240, 237, 0.85);
  margin: 0 0 12px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 3.65em;
}

.card-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
  margin-bottom: 10px;
}

.card-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  overflow: hidden;
}

.tag-pill {
  font-family: var(--mono);
  font-size: 0.64rem;
  padding: 2px 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--muted);
  white-space: nowrap;
}

.card-arrow {
  color: var(--accent-link);
  font-size: 0.95rem;
  font-weight: 600;
  transition: transform 160ms ease, color 160ms ease;
  flex-shrink: 0;
}

.project-card:hover .card-arrow {
  transform: translate(2px, -2px);
  color: var(--accent-link-hover);
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
