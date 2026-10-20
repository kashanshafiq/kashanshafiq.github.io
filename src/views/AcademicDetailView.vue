<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { academicItems } from '../content/academicItems'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const router = useRouter()

const effectiveSlug = computed(() => {
  const s = route.params.slug as string
  if (s === 'haroon-residence-bim') return 'tahir-residency-bim'
  if (s === 'simco-site-engineering-intern' || s === 'simco-trainee-engineer') return 'resolve-nstp-tower-intern'
  return s
})

const item = computed(() =>
  academicItems.find((i) => i.sectionId === route.params.section && i.slug === effectiveSlug.value)
)

const sectionItems = computed(() =>
  academicItems.filter((i) => i.sectionId === route.params.section)
)

const currentIndex = computed(() =>
  sectionItems.value.findIndex((i) => i.slug === effectiveSlug.value)
)

const prevItem = computed(() =>
  currentIndex.value > 0 ? sectionItems.value[currentIndex.value - 1] : null
)

const nextItem = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < sectionItems.value.length - 1
    ? sectionItems.value[currentIndex.value + 1]
    : null
)

// Document Archive modal state
const isModalOpen = ref(false)

function prevRecord() {
  const q = route.query.from ? { from: route.query.from as string } : undefined
  if (prevItem.value) {
    router.push({ path: `/academic/${item.value?.sectionId}/${prevItem.value.slug}`, query: q })
  } else if (sectionItems.value.length > 1) {
    router.push({ path: `/academic/${item.value?.sectionId}/${sectionItems.value[sectionItems.value.length - 1].slug}`, query: q })
  }
}

function nextRecord() {
  const q = route.query.from ? { from: route.query.from as string } : undefined
  if (nextItem.value) {
    router.push({ path: `/academic/${item.value?.sectionId}/${nextItem.value.slug}`, query: q })
  } else if (sectionItems.value.length > 1) {
    router.push({ path: `/academic/${item.value?.sectionId}/${sectionItems.value[0].slug}`, query: q })
  }
}

const sourceContext = computed(() => {
  const fromQuery = route.query.from as string | undefined
  if (fromQuery) return fromQuery

  if (typeof window !== 'undefined' && window.history?.state?.back) {
    const backUrl = String(window.history.state.back)
    if (backUrl.includes('/cv')) return 'cv'
    if (backUrl.includes('/community')) return 'community'
    if (backUrl.includes('/recognition')) return 'recognition'
    if (backUrl.includes('/experience')) return 'experience'
    if (backUrl.includes('/research')) return 'research'
  }
  return null
})

const backTarget = computed<{ to: string | { path: string; hash?: string }; label: string }>(() => {
  if (!item.value) return { to: '/cv', label: 'Academics' }
  const sec = item.value.sectionId
  const secTitle = item.value.sectionTitle || 'Academics'
  const isFromCv = sourceContext.value === 'cv'

  // If user came from Academics (/cv):
  if (isFromCv) {
    return {
      to: { path: '/cv', hash: `#${sec}` },
      label: `${secTitle} (Academics)`,
    }
  }

  // If user came from main web pages, or direct fallback:
  switch (sec) {
    case 'volunteering':
      return { to: '/community', label: 'Volunteering' }
    case 'honors-awards':
      return { to: '/recognition', label: 'Honours and Awards' }
    case 'work-experience':
      return { to: '/experience', label: 'Work' }
    case 'research-experience':
      return { to: '/research', label: 'Research' }
    case 'projects':
      return { to: { path: '/cv', hash: '#projects' }, label: 'Academic Projects' }
    case 'certifications':
      return { to: { path: '/cv', hash: '#certifications' }, label: 'Certifications' }
    case 'professional-trainings':
      return { to: { path: '/cv', hash: '#professional-trainings' }, label: 'Professional training & CPD' }
    case 'conferences':
      return { to: { path: '/cv', hash: '#conferences' }, label: 'Conferences' }
    case 'extracurricular':
      return { to: { path: '/cv', hash: '#extracurricular' }, label: 'Extracurricular Activities' }
    default:
      return { to: { path: '/cv', hash: `#${sec}` }, label: secTitle }
  }
})

const breadcrumbTarget = computed<{ to: string | { path: string; hash?: string }; label: string }>(() => {
  if (!item.value) return { to: '/cv', label: 'Academics' }
  const sec = item.value.sectionId
  const secTitle = item.value.sectionTitle || 'Academics'
  const isFromCv = sourceContext.value === 'cv'

  if (isFromCv) {
    return {
      to: { path: '/cv', hash: `#${sec}` },
      label: `Academics / ${secTitle}`,
    }
  }

  switch (sec) {
    case 'volunteering':
      return { to: '/community', label: 'Volunteering / Academic archive' }
    case 'honors-awards':
      return { to: '/recognition', label: 'Honours and Awards / Academic archive' }
    case 'work-experience':
      return { to: '/experience', label: 'Work / Academic archive' }
    case 'research-experience':
      return { to: '/research', label: 'Research / Academic archive' }
    default:
      return { to: { path: '/cv', hash: `#${sec}` }, label: `${secTitle} / Academic archive` }
  }
})

watchEffect(() => {
  if (route.params.slug === 'haroon-residence-bim') {
    router.replace(`/academic/${route.params.section}/tahir-residency-bim`)
  }
  if (route.params.slug === 'simco-site-engineering-intern' || route.params.slug === 'simco-trainee-engineer') {
    router.replace(`/academic/${route.params.section}/resolve-nstp-tower-intern`)
  }
  document.title = item.value
    ? `${item.value.title} · ${item.value.sectionTitle} — Kashan Shafiq`
    : 'Archive record not found — Kashan Shafiq'
})
</script>

<template>
  <div v-if="item" class="shell page-body academic-archive-page">
    <div class="archive-split-layout">
      <!-- Left Column: Academic Metadata & Highlights -->
      <section class="archive-content-col">
        <!-- Breadcrumb back link matching current context -->
        <div class="archive-breadcrumb">
          <RouterLink
            :to="breadcrumbTarget.to"
            class="breadcrumb-link"
          >
            {{ breadcrumbTarget.label }} <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>

        <!-- Eyebrow Category / Period -->
        <div class="archive-eyebrow">
          <span class="eyebrow-category">{{ (item.domain || item.sectionTitle).toUpperCase() }}</span>
          <span class="eyebrow-sep">/</span>
          <span class="eyebrow-year">{{ item.period }}</span>
        </div>

        <!-- Main Title -->
        <h1 class="archive-title">{{ item.title }}</h1>

        <!-- Institution / Organization Block -->
        <div v-if="item.organization || item.subtitle" class="archive-institution-block">
          <h2 class="archive-institution-name">{{ item.organization || item.subtitle }}</h2>
          <p v-if="item.organization && item.subtitle" class="archive-location-name">{{ item.subtitle }}</p>
        </div>

        <!-- Outlined Pill Badge -->
        <div class="archive-badge-wrap">
          <span class="archive-pill-badge">
            {{ item.badge || item.subtitle || item.period }}
          </span>
        </div>

        <!-- Comprehensive Brief Lead Summary -->
        <p class="archive-summary-lead">
          {{ item.summary }}
        </p>

        <!-- Subtle Divider Line matching reference image -->
        <hr class="archive-divider-line" />

        <!-- Highlights Section -->
        <div class="archive-highlights-section">
          <h3 class="highlights-heading">Key highlights</h3>
          <ul class="highlights-list">
            <li v-for="d in item.details" :key="d">
              {{ d }}
            </li>
          </ul>
        </div>

        <!-- Associated Competencies & Tools -->
        <div v-if="item.tools && item.tools.length" class="core-topics-area">
          <p class="topics-label">Associated Competencies &amp; Tools</p>
          <div class="tag-list mini-tags">
            <span v-for="t in item.tools" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>

        <!-- Action Link / Certificate Button -->
        <div v-if="item.link" class="action-btn-row">
          <a
            class="button primary"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.linkLabel || 'View Verification / Certificate ↗' }}
          </a>
        </div>

        <!-- Bottom Navigation -->
        <nav class="archive-bottom-nav" aria-label="Section navigation">
          <RouterLink :to="backTarget.to" class="text-link">
            ← Back to {{ backTarget.label }}
          </RouterLink>
        </nav>
      </section>

      <!-- Right Column: Document Archive Card matching reference screenshot -->
      <aside class="archive-visual-col">
        <div class="doc-archive-card">
          <!-- Top Row -->
          <div class="doc-archive-header">
            <span class="doc-archive-tag">DOCUMENT ARCHIVE</span>
            <button
              type="button"
              class="doc-enlarge-btn"
              @click="isModalOpen = true"
            >
              Click to enlarge <span aria-hidden="true">↗</span>
            </button>
          </div>

          <!-- Document Preview Canvas / Sheet -->
          <div class="doc-sheet-container" @click="isModalOpen = true">
            <div class="doc-sheet">
              <div class="doc-sheet-seal">
                <span class="seal-icon">✦</span>
              </div>
              <p class="doc-sheet-authority">{{ item.organization || item.sectionTitle }}</p>
              <h4 class="doc-sheet-title">{{ item.title }}</h4>
              <p class="doc-sheet-type">{{ item.subtitle || item.domain || 'Verified Record' }}</p>
              <div class="doc-sheet-meta-box">
                <p><strong>Candidate:</strong> Kashan Shafiq</p>
                <p><strong>Section:</strong> {{ item.sectionTitle }}</p>
                <p><strong>Standing / Metric:</strong> {{ item.badge || item.subtitle || 'Verified Record' }}</p>
                <p><strong>Period / Date:</strong> {{ item.period }}</p>
              </div>
              <div class="doc-sheet-signatures">
                <span>Verified Seal</span>
                <span>Academic Archive</span>
              </div>
              <div class="doc-expand-corner" aria-hidden="true">⤢</div>
            </div>
          </div>

          <!-- Bottom Carousel Controls matching reference screenshot -->
          <div class="doc-archive-footer">
            <div class="doc-carousel-controls">
              <button
                type="button"
                class="carousel-nav-btn"
                aria-label="Previous record"
                @click="prevRecord"
              >
                ←
              </button>
              <span class="carousel-counter">
                Record {{ currentIndex + 1 }} / {{ sectionItems.length }}
              </span>
              <button
                type="button"
                class="carousel-nav-btn"
                aria-label="Next record"
                @click="nextRecord"
              >
                →
              </button>
            </div>
            <button
              type="button"
              class="doc-action-btn"
              @click="isModalOpen = true"
            >
              Enlarge
            </button>
          </div>
        </div>
      </aside>
    </div>

    <!-- Enlarge Modal Dialog -->
    <div
      v-if="isModalOpen"
      class="doc-modal-overlay"
      role="dialog"
      aria-modal="true"
      @click.self="isModalOpen = false"
    >
      <div class="doc-modal-content">
        <div class="modal-header">
          <h3>{{ item.title }}</h3>
          <button
            type="button"
            class="modal-close-btn"
            aria-label="Close dialog"
            @click="isModalOpen = false"
          >
            ✕
          </button>
        </div>
        <div class="modal-body-sheet">
          <p class="modal-authority">{{ item.organization || item.sectionTitle }}</p>
          <h2>{{ item.title }}</h2>
          <p class="modal-sub">{{ item.subtitle || item.period }}</p>
          <div class="modal-specs">
            <p><strong>Candidate:</strong> Kashan Shafiq</p>
            <p><strong>Section:</strong> {{ item.sectionTitle }}</p>
            <p><strong>Scope / Domain:</strong> {{ item.domain || item.subtitle || 'Civil Engineering' }}</p>
            <p><strong>Timeline:</strong> {{ item.period }}</p>
          </div>
          <p class="modal-note">
            Official primary record verified in Kashan Shafiq academic portfolio.
          </p>
        </div>
        <div class="modal-footer">
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="button primary"
            style="margin-right: 12px;"
          >
            {{ item.linkLabel || 'Open External Verification ↗' }}
          </a>
          <button type="button" class="button" @click="isModalOpen = false">Close</button>
        </div>
      </div>
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
  display: inline-block;
  font-family: var(--mono);
  font-size: 0.86rem;
  color: var(--accent);
  border: 1px solid rgba(234, 179, 8, 0.45);
  background: rgba(234, 179, 8, 0.06);
  padding: 6px 14px;
  border-radius: 4px;
}

.archive-summary-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #c9d1d9;
  margin-bottom: 28px;
}

.archive-divider-line {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  margin: 28px 0;
}

.highlights-heading {
  font-size: 1.15rem;
  font-weight: 600;
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
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}

.action-btn-row {
  margin-top: 28px;
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
  background: #0f1418;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 22px;
  position: sticky;
  top: 90px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.doc-archive-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.doc-archive-tag {
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  color: #4ade80;
  font-weight: 600;
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

.doc-archive-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.doc-carousel-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.carousel-nav-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--mono);
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 160ms ease;
}

.carousel-nav-btn:hover {
  background: var(--accent);
  color: #0b0f12;
}

.carousel-counter {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.doc-action-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 160ms ease;
}

.doc-action-btn:hover {
  color: var(--text);
  border-color: var(--accent);
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
    gap: 40px;
  }
  .doc-archive-card {
    position: static;
  }
}
</style>
