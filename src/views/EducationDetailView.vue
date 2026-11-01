<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { educationList } from '../content/education'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const item = computed(() => educationList.find((e) => e.slug === route.params.slug))



// Document Archive State
const activeDocIndex = ref(0)
const isModalOpen = ref(false)

const documents = computed(() => {
  if (!item.value) return []
  if (item.value.slug === 'bs-civil-engineering') {
    return [
      {
        title: 'Bachelor of Science in Civil Engineering Degree',
        type: 'Official Degree Certificate',
        serial: 'Serial No. 127867 · Reg No. FA22-CVE-055/WAH',
        date: 'July 20, 2026',
        authority: 'COMSATS University Islamabad, Wah Campus',
        conferred: 'Conferred with Distinction (Gold Medalist)',
      },
      {
        title: 'Official Academic Transcript (All 8 Semesters)',
        type: 'Consolidated Transcript',
        serial: 'Total Cr: 137 · Quality Points: 541.26',
        date: 'July 2026',
        authority: 'Office of the Controller of Examinations',
        conferred: 'CGPA: 3.95 / 4.00 (98% Aggregate)',
      },
    ]
  } else if (item.value.slug === 'hssc-pre-engineering') {
    return [
      {
        title: 'Higher Secondary School Certificate (HSSC)',
        type: 'FBISE Result Certificate',
        serial: 'Certificate No. 254300374 · Roll No. 520298',
        date: 'August 31, 2022',
        authority: 'Federal Board of Intermediate & Secondary Education, Islamabad',
        conferred: 'Pre-Engineering Group · Grade A (850 / 1100)',
      },
      {
        title: 'HSSC Detailed Marks Certificate',
        type: 'Marks Statement Card',
        serial: 'Registration No. 2024301106',
        date: 'Annual 2022',
        authority: 'F. G. Degree College for Men, Wah Cantt',
        conferred: 'Mathematics: 174/200 · Urdu: 168/200 · Physics: 149/200',
      },
    ]
  } else {
    return [
      {
        title: 'Secondary School Certificate (SSC / Matriculation)',
        type: 'FBISE Certificate',
        serial: 'Certificate No. 243000114 · Serial No. 1175852',
        date: 'July 20, 2020',
        authority: 'Federal Board of Intermediate & Secondary Education, Islamabad',
        conferred: 'Science Group · Grade A1 (948 / 1100 - 86.2%)',
      },
      {
        title: 'SSC Detailed Marks Certificate',
        type: 'Marks Statement Card',
        serial: 'Roll No. 124144 · Reg No. 2024301106',
        date: 'Annual 2020',
        authority: 'Sir Syed College Campus-II, Wah Cantt',
        conferred: 'Chemistry: 145/150 · Physics: 140/150 · Math: 128/150',
      },
    ]
  }
})

const activeDoc = computed(() => documents.value[activeDocIndex.value] || documents.value[0])

function nextDoc() {
  if (activeDocIndex.value < documents.value.length - 1) {
    activeDocIndex.value++
  } else {
    activeDocIndex.value = 0
  }
}

function prevDoc() {
  if (activeDocIndex.value > 0) {
    activeDocIndex.value--
  } else {
    activeDocIndex.value = documents.value.length - 1
  }
}

watchEffect(() => {
  document.title = item.value
    ? `${item.value.shortDegree} · ${item.value.institution} — Kashan Shafiq`
    : 'Education not found — Kashan Shafiq'
})
</script>

<template>
  <div v-if="item" class="shell page-body education-archive-page">
    <div class="archive-split-layout">
      <!-- Left Column: Academic Metadata & Highlights -->
      <section class="archive-content-col">
        <!-- Breadcrumb back link -->
        <div class="archive-breadcrumb">
          <RouterLink to="/cv#education" class="breadcrumb-link">
            Education / Academic archive <span aria-hidden="true">↗</span>
          </RouterLink>
        </div>

        <!-- Eyebrow Category / Years -->
        <div class="archive-eyebrow">
          <span class="eyebrow-category">{{ item.slug === 'bs-civil-engineering' ? 'UNDERGRADUATE' : (item.slug === 'hssc-pre-engineering' ? 'INTERMEDIATE' : 'MATRICULATION') }}</span>
          <span class="eyebrow-sep">/</span>
          <span class="eyebrow-year">{{ item.years }}</span>
        </div>

        <!-- Main Title -->
        <h1 class="archive-title">{{ item.degree }}</h1>

        <!-- Institution & Location -->
        <div class="archive-institution-block">
          <h2 class="archive-institution-name">{{ item.institution }}</h2>
          <p class="archive-location-name">{{ item.location }}</p>
        </div>

        <!-- Outlined Distinction / Grade Pill Badge -->
        <div class="archive-badge-wrap">
          <span class="archive-pill-badge">
            {{ item.grade }}
          </span>
        </div>

        <!-- Comprehensive Brief Lead Summary -->
        <p class="archive-summary-lead">
          {{ item.summary }}
        </p>

        <!-- Divider Line -->
        <hr class="archive-divider-line" />

        <!-- Academic Highlights -->
        <div class="archive-highlights-section">
          <h3 class="highlights-heading">Academic highlights</h3>
          <ul class="highlights-list">
            <li v-for="ach in item.achievements" :key="ach">
              {{ ach }}
            </li>
          </ul>

          <p v-if="item.dateIssued" class="conferral-note">
            Degree conferred on <strong>{{ item.dateIssued }}</strong>.
          </p>
        </div>

        <!-- Core Topics Tags -->
        <div v-if="item.courses && item.courses.length" class="core-topics-area">
          <p class="topics-label">Core Technical Subject Areas</p>
          <div class="tag-list mini-tags">
            <span v-for="c in item.courses.slice(0, 6)" :key="c" class="tag">{{ c }}</span>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <nav class="archive-bottom-nav" aria-label="Education navigation">
          <RouterLink to="/cv#education" class="text-link">
            ← Back to Education
          </RouterLink>
        </nav>
      </section>

      <!-- Right Column: Document Archive Card -->
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
              <p class="doc-sheet-authority">{{ activeDoc.authority }}</p>
              <h4 class="doc-sheet-title">{{ activeDoc.title }}</h4>
              <p class="doc-sheet-type">{{ activeDoc.type }}</p>
              <div class="doc-sheet-meta-box">
                <p><strong>Candidate:</strong> Kashan Shafiq</p>
                <p><strong>Standing:</strong> {{ activeDoc.conferred }}</p>
                <p><strong>Reference:</strong> {{ activeDoc.serial }}</p>
                <p><strong>Issued:</strong> {{ activeDoc.date }}</p>
              </div>
              <div class="doc-sheet-signatures">
                <span>Verified Seal</span>
                <span>Controller of Exams</span>
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
                aria-label="Previous document"
                @click="prevDoc"
              >
                ←
              </button>
              <span class="carousel-counter">
                Document {{ activeDocIndex + 1 }} / {{ documents.length }}
              </span>
              <button
                type="button"
                class="carousel-nav-btn"
                aria-label="Next document"
                @click="nextDoc"
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
          <h3>{{ activeDoc.title }}</h3>
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
          <p class="modal-authority">{{ activeDoc.authority }}</p>
          <h2>{{ activeDoc.title }}</h2>
          <p class="modal-sub">{{ activeDoc.conferred }}</p>
          <div class="modal-specs">
            <p><strong>Candidate:</strong> Kashan Shafiq</p>
            <p><strong>Authority:</strong> {{ activeDoc.authority }}</p>
            <p><strong>Reference / Serial:</strong> {{ activeDoc.serial }}</p>
            <p><strong>Date of Record:</strong> {{ activeDoc.date }}</p>
          </div>
          <p class="modal-note">
            Official primary document verified in academic portfolio repository.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="button" @click="isModalOpen = false">Close</button>
        </div>
      </div>
    </div>
  </div>

  <NotFoundView v-else />
</template>

<style scoped>
.education-archive-page {
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
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 650;
  line-height: 1.12;
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

.conferral-note {
  font-size: 0.92rem;
  color: var(--text);
  margin-top: 16px;
}

.conferral-note strong {
  color: var(--accent);
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
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
  color: #0f172a;
  margin: 0 0 4px 0;
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
  border-top: 1px solid var(--line);
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
  font-size: 1.45rem;
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
