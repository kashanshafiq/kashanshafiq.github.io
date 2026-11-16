<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../content/projects'
import MediaArchiveWindow from '../components/MediaArchiveWindow.vue'
import { getMediaArchive } from '../data/mediaArchiveData'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()

const slugAliases: Record<string, string> = {
  'structural-commercial-building': 'structural-design',
  'three-story-school-building': 'school-building-design',
  'retaining-walls-design': 'retaining-walls',
  'quantity-surveying-takeoff': 'quantity-surveying',
  'primavera-p6-scheduling': 'construction-planning',
}

const canonicalSlug = computed(() => {
  const s = route.params.slug as string
  return slugAliases[s] || s
})

const project = computed(() =>
  projects.find(p => p.slug === canonicalSlug.value || p.slug === route.params.slug || (p.aliases && p.aliases.includes(route.params.slug as string)))
)

const mediaArchive = computed(() => (project.value ? getMediaArchive(project.value.slug) : null))

watchEffect(() => {
  document.title = project.value
    ? `${project.value.title} · Projects — Kashan Shafiq`
    : 'Project not found — Kashan Shafiq'
})

function formatPersonMentions(text: string, slug?: string): string {
  if (!text) return ''
  let res = text
  if (slug === 'tahir-residency-bim') {
    res = res.replace(
      /\bFaizan Manshad\b/g,
      '<a href="https://www.linkedin.com/in/faizanmanshad/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Faizan Manshad LinkedIn profile">Faizan Manshad</a>'
    ).replace(
      /\bHaider Ali\b/g,
      '<a href="https://www.linkedin.com/in/haider-ali-001780275/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Haider Ali LinkedIn profile">Haider Ali</a>'
    )
  }
  return res
}
</script>

<template>
  <div v-if="project" class="shell page-body academic-archive-page">
    <div class="archive-split-layout">
      <!-- Left Column: Academic Metadata & Highlights -->
      <section class="archive-content-col">
        <!-- Breadcrumb back link -->
        <div class="archive-breadcrumb">
          <RouterLink to="/work" class="breadcrumb-link">
            Projects / Academic archive <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>

        <!-- Eyebrow Category / Period -->
        <div class="archive-eyebrow">
          <span class="eyebrow-category">{{ (project.domain || project.category || 'Projects').toUpperCase() }}</span>
          <span class="eyebrow-sep">/</span>
          <span class="eyebrow-year">{{ project.period || '2026' }}</span>
        </div>

        <!-- Main Title -->
        <h1 class="archive-title">{{ project.title }}</h1>

        <!-- Institution / Organization Block -->
        <div v-if="project.organization || project.subtitle" class="archive-institution-block">
          <h2 class="archive-institution-name">{{ project.organization || 'COMSATS University Islamabad' }}</h2>
          <p v-if="project.subtitle" class="archive-location-name">{{ project.subtitle }}</p>
        </div>

        <!-- Outlined Pill Badge: plain unlinked badge -->
        <div class="archive-badge-wrap">
          <span class="archive-pill-badge">
            {{ project.badge || project.subtitle || project.category }}
          </span>
        </div>

        <!-- Comprehensive Brief Lead Summary -->
        <p class="archive-summary-lead" v-html="formatPersonMentions(project.summary, project.slug)"></p>

        <!-- Subtle Divider Line -->
        <hr class="archive-divider-line" />

        <!-- Highlights Section -->
        <div class="archive-highlights-section">
          <h3 class="highlights-heading">Key highlights</h3>
          <ul class="highlights-list">
            <li v-for="d in (project.details || project.scope)" :key="d" v-html="formatPersonMentions(d, project.slug)"></li>
          </ul>
        </div>

        <!-- Associated Competencies & Tools -->
        <div v-if="project.tools && project.tools.length" class="core-topics-area">
          <p class="topics-label">Associated Competencies &amp; Tools</p>
          <div class="tag-list mini-tags">
            <span v-for="t in project.tools" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <nav class="archive-bottom-nav" aria-label="Section navigation">
          <RouterLink to="/work" class="text-link">
            ← Back to Projects
          </RouterLink>
        </nav>
      </section>

      <!-- Right Column: Real Media Archive Window -->
      <aside class="archive-visual-col">
        <MediaArchiveWindow
          :archive="mediaArchive"
          :fallback-title="project.title"
          fallback-section="Projects"
          :fallback-organization="project.organization"
          :fallback-period="project.period"
          :fallback-subtitle="project.subtitle"
          :fallback-badge="project.badge"
          :is-project="!['retaining-walls', 'retaining-walls-design'].includes(project.slug)"
        />
      </aside>
    </div>
  </div>

  <NotFoundView v-else />
</template>

<style scoped>
.academic-archive-page {
  padding-top: 40px;
  padding-bottom: 80px;
  animation: fadeIn 0.24s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

.archive-split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: flex-start;
}

.archive-content-col {
  min-width: 0;
}

.archive-visual-col {
  position: sticky;
  top: 90px;
  min-width: 0;
  width: 100%;
}

.archive-breadcrumb {
  margin-bottom: 28px;
}

.breadcrumb-link {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 160ms ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.archive-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  color: var(--line-strong);
  margin-bottom: 16px;
}

.eyebrow-category {
  color: var(--accent);
}

.eyebrow-sep {
  color: var(--border);
}

.eyebrow-year {
  color: var(--muted);
}

.archive-title {
  font-size: clamp(2rem, 3.8vw, 2.9rem);
  font-weight: 650;
  line-height: 1.14;
  color: var(--text);
  margin: 0 0 12px 0;
  letter-spacing: -0.02em;
}

.archive-institution-block {
  margin-bottom: 20px;
}

.archive-institution-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.archive-location-name {
  font-size: 0.95rem;
  color: var(--muted);
  margin: 4px 0 0 0;
}

.archive-badge-wrap {
  margin-bottom: 22px;
}

.archive-pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-label);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  background: var(--accent);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  border: none;
}

.archive-pill-badge-link {
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.16s ease, background 0.16s ease, box-shadow 0.16s ease;
  box-shadow: 0 2px 8px rgba(185, 28, 28, 0.25);
}

.archive-pill-badge-link:hover {
  background: #991b1b;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(185, 28, 28, 0.42);
  color: #FFFFFF;
}

.badge-link-icon {
  font-size: 0.88em;
  transition: transform 0.16s ease;
}

.archive-pill-badge-link:hover .badge-link-icon {
  transform: translate(2px, -2px);
}

:deep(.person-mention-link) {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  font-weight: 600;
  transition: color 150ms ease, text-decoration-color 150ms ease;
  display: inline;
}

:deep(.person-mention-link:hover) {
  color: #991b1b;
  text-decoration-color: #991b1b;
}

.archive-summary-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--muted);
  margin-bottom: 28px;
}

.archive-divider-line {
  border: none;
  border-top: 1px solid var(--line);
  margin: 28px 0;
}

.highlights-heading {
  font-family: var(--font-headline);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 16px 0;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
  margin: 0 0 20px 0;
}

.highlights-list li {
  font-size: 0.95rem;
  line-height: 1.55;
  color: var(--muted);
}

.core-topics-area {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.topics-label {
  font-family: var(--font-label);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}

.archive-bottom-nav {
  margin-top: 48px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
}

/* Document Archive Visual Card (Right Column) */
.doc-archive-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  border-radius: var(--radius-card);
  padding: 22px;
  position: sticky;
  top: 90px;
  box-shadow: var(--shadow-card-dark);
}

.doc-archive-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.doc-archive-tag {
  font-family: var(--font-label);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
}

.doc-enlarge-btn {
  background: none;
  border: none;
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 160ms ease;
}

.doc-enlarge-btn:hover {
  color: var(--accent);
}

.doc-sheet-container {
  cursor: pointer;
  perspective: 800px;
}

.doc-sheet {
  background: #f8fafc;
  color: #0f172a;
  border-radius: 4px;
  padding: 32px 28px;
  min-height: 290px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.doc-sheet:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5);
}

.doc-sheet-seal {
  font-size: 1.6rem;
  color: #475569;
  text-align: center;
  margin-bottom: 8px;
}

.doc-sheet-authority {
  font-family: var(--mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  color: #475569;
  margin: 0 0 12px 0;
}

.doc-sheet-title {
  font-size: 1.1rem;
  font-weight: 700;
  text-align: center;
  color: #0f172a;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.doc-sheet-type {
  font-size: 0.8rem;
  text-align: center;
  color: #64748b;
  margin: 0 0 20px 0;
}

.doc-sheet-meta-box {
  background: #f1f5f9;
  border-left: 3px solid #0f172a;
  padding: 12px 14px;
  border-radius: 2px;
  font-size: 0.78rem;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 16px;
}

.doc-sheet-meta-box p {
  margin: 2px 0;
}

.doc-sheet-signatures {
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed #cbd5e1;
  padding-top: 10px;
  font-family: var(--mono);
  font-size: 0.68rem;
  color: #64748b;
}

.doc-expand-corner {
  position: absolute;
  bottom: 8px;
  right: 10px;
  font-size: 1rem;
  color: #94a3b8;
}

/* Modal */
.doc-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.doc-modal-content {
  background: #11161b;
  border: 1px solid var(--border);
  border-radius: 6px;
  max-width: 620px;
  width: 100%;
  padding: 28px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.18s ease-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h3 {
  font-size: 1.15rem;
  color: var(--text);
  margin: 0;
}

.modal-close-btn {
  background: none;
  border: none;
  color: var(--muted);
  font-size: 1.1rem;
  cursor: pointer;
}

.modal-body-sheet {
  background: #f8fafc;
  color: #0f172a;
  border-radius: 4px;
  padding: 36px 30px;
  text-align: center;
}

.modal-authority {
  font-family: var(--mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #475569;
}

.modal-body-sheet h2 {
  font-size: 1.35rem;
  color: #0f172a;
  margin: 12px 0 6px 0;
}

.modal-sub {
  font-size: 0.95rem;
  color: #0284c7;
  font-weight: 600;
  margin-bottom: 24px;
}

.modal-specs {
  background: #f1f5f9;
  padding: 16px;
  border-radius: 4px;
  text-align: left;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.6;
}

.modal-note {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: #64748b;
  margin-top: 18px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

@media (max-width: 960px) {
  .archive-split-layout {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .archive-visual-col {
    position: static;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
