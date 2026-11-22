<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { academicItems } from '../content/academicItems'
import MediaArchiveWindow from '../components/MediaArchiveWindow.vue'
import { getMediaArchive } from '../data/mediaArchiveData'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const router = useRouter()

const effectiveSlug = computed(() => {
  const s = route.params.slug as string
  if (s === 'haroon-residence-bim' || s === 'code-based-bim-modelling' || s === 'code-based-bim-modeling') return 'tahir-residency-bim'
  if (s === 'simco-site-engineering-intern' || s === 'simco-trainee-engineer') return 'resolve-nstp-tower-intern'
  if (s === 'extra-shelter-for-all') return 'extra-wed-hackathon-2025'
  return s
})

const targetSection = computed(() => {
  const p = route.path
  if (p.startsWith('/honours-and-awards') || p.startsWith('/honors-awards') || p.startsWith('/recognition')) return 'honors-awards'
  if (p.startsWith('/work') || p.startsWith('/experience')) return 'work-experience'
  if (p.startsWith('/research')) return 'research-experience'
  if (p.startsWith('/extracurriculars') || p.startsWith('/community')) return 'volunteering'
  if (route.params.section) return route.params.section as string
  return null
})

const item = computed(() => {
  if (targetSection.value) {
    const match = academicItems.find(
      (i) => i.sectionId === targetSection.value && i.slug === effectiveSlug.value
    )
    if (match) return match
    if (targetSection.value === 'volunteering') {
      const matchExtra = academicItems.find(
        (i) => i.sectionId === 'extracurricular' && i.slug === effectiveSlug.value
      )
      if (matchExtra) return matchExtra
    }
  }
  return academicItems.find((i) => i.slug === effectiveSlug.value) || null
})

const mediaArchive = computed(() => (item.value ? getMediaArchive(item.value.slug) : null))

const sourceContext = computed(() => {
  const fromQuery = route.query.from as string | undefined
  if (fromQuery) return fromQuery

  const path = route.path
  if (path.startsWith('/honours-and-awards') || path.startsWith('/honors-awards') || path.startsWith('/recognition')) return 'honours-and-awards'
  if (path.startsWith('/work') || path.startsWith('/experience')) return 'work'
  if (path.startsWith('/research')) return 'research'
  if (path.startsWith('/extracurriculars') || path.startsWith('/community')) return 'extracurriculars'
  if (path.startsWith('/projects')) return 'projects'
  if (path.startsWith('/academics') || path.startsWith('/cv') || path.startsWith('/academic')) return 'academics'

  if (typeof window !== 'undefined' && window.history?.state?.back) {
    const backUrl = String(window.history.state.back)
    if (backUrl.includes('/academics') || backUrl.includes('/cv')) return 'academics'
    if (backUrl.includes('/extracurriculars') || backUrl.includes('/community')) return 'extracurriculars'
    if (backUrl.includes('/honours-and-awards') || backUrl.includes('/recognition') || backUrl.includes('/honors-awards')) return 'honours-and-awards'
    if (backUrl.includes('/work') || backUrl.includes('/experience')) return 'work'
    if (backUrl.includes('/research')) return 'research'
    if (backUrl.includes('/projects')) return 'projects'
  }
  return null
})

const backTarget = computed<{ to: string | { path: string; hash?: string }; label: string }>(() => {
  if (!item.value) return { to: '/academics', label: 'Academics' }
  const sec = item.value.sectionId
  const secTitle = item.value.sectionTitle || 'Academics'
  const isFromAcademics = sourceContext.value === 'academics' || sourceContext.value === 'cv'

  // If user came from Academics:
  if (isFromAcademics) {
    return {
      to: { path: '/academics', hash: `#${sec}` },
      label: `${secTitle} (Academics)`,
    }
  }

  // Hierarchical back links matching the page name:
  switch (sec) {
    case 'volunteering':
    case 'extracurricular':
      return { to: '/extracurriculars', label: 'Extracurriculars' }
    case 'honors-awards':
      return { to: '/honours-and-awards', label: 'Honours and Awards' }
    case 'work-experience':
      return { to: '/work', label: 'Work' }
    case 'research-experience':
      return { to: '/research', label: 'Research' }
    case 'projects':
      return { to: '/projects', label: 'Projects' }
    case 'certifications':
      return { to: { path: '/academics', hash: '#certifications' }, label: 'Certifications (Academics)' }
    case 'professional-trainings':
      return { to: { path: '/academics', hash: '#professional-trainings' }, label: 'Continuing Professional Development Seminars' }
    case 'conferences':
      return { to: { path: '/academics', hash: '#conferences' }, label: 'Conferences (Academics)' }
    default:
      return { to: { path: '/academics', hash: `#${sec}` }, label: secTitle }
  }
})

const breadcrumbTarget = computed<{ to: string | { path: string; hash?: string }; label: string }>(() => {
  if (!item.value) return { to: '/academics', label: 'Academics' }
  const sec = item.value.sectionId
  const secTitle = item.value.sectionTitle || 'Academics'
  const isFromAcademics = sourceContext.value === 'academics' || sourceContext.value === 'cv'

  if (isFromAcademics) {
    return {
      to: { path: '/academics', hash: `#${sec}` },
      label: `Academics / ${secTitle}`,
    }
  }

  switch (sec) {
    case 'volunteering':
    case 'extracurricular':
      return { to: '/extracurriculars', label: 'Extracurriculars / Academic archive' }
    case 'honors-awards':
      return { to: '/honours-and-awards', label: 'Honours and Awards / Academic archive' }
    case 'work-experience':
      return { to: '/work', label: 'Work / Academic archive' }
    case 'research-experience':
      return { to: '/research', label: 'Research / Academic archive' }
    case 'projects':
      return { to: '/projects', label: 'Projects / Academic archive' }
    default:
      return { to: { path: '/academics', hash: `#${sec}` }, label: `${secTitle} / Academic archive` }
  }
})

watchEffect(() => {
  if (route.params.slug === 'haroon-residence-bim') {
    const basePath = route.path.startsWith('/work') ? '/work' : (route.path.startsWith('/honours-and-awards') ? '/honours-and-awards' : `/academics/${route.params.section || 'work-experience'}`)
    router.replace(`${basePath}/tahir-residency-bim`)
  }
  if (route.params.slug === 'simco-site-engineering-intern' || route.params.slug === 'simco-trainee-engineer') {
    const basePath = route.path.startsWith('/work') ? '/work' : `/academics/${route.params.section || 'work-experience'}`
    router.replace(`${basePath}/resolve-nstp-tower-intern`)
  }
  document.title = item.value
    ? `${item.value.title} · ${item.value.sectionTitle} — Kashan Shafiq`
    : 'Archive record not found — Kashan Shafiq'
})

function formatPersonMentions(text: string, slug?: string): string {
  if (!text) return ''
  let res = text

  // 1. Faizan Manshad in Academic Resource Database (Image 1)
  if (slug === 'volunteering-academic-resource-database') {
    res = res.replace(
      /\bFaizan Manshad\b/g,
      '<a href="https://www.linkedin.com/in/faizanmanshad/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Faizan Manshad LinkedIn profile">Faizan Manshad</a>'
    )
  }

  // 2. Faizan Manshad and Haider Ali in Tahir Residency (Image 2)
  if (slug === 'tahir-residency-bim') {
    res = res.replace(
      /\bFaizan Manshad\b/g,
      '<a href="https://www.linkedin.com/in/faizanmanshad/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Faizan Manshad LinkedIn profile">Faizan Manshad</a>'
    ).replace(
      /\bHaider Ali\b/g,
      '<a href="https://www.linkedin.com/in/haider-ali-001780275/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Haider Ali LinkedIn profile">Haider Ali</a>'
    )
  }

  // 3. Authors in BIM to AR (Image 3)
  if (slug === 'bim-to-ar-research') {
    res = res.replace(
      /\bHassan Ashraf\b/g,
      '<a href="https://www.linkedin.com/in/hassan-ashraf-a0770535/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Hassan Ashraf LinkedIn profile">Hassan Ashraf</a>'
    ).replace(
      /\bFaizan Manshad\b/g,
      '<a href="https://www.linkedin.com/in/faizanmanshad/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Faizan Manshad LinkedIn profile">Faizan Manshad</a>'
    ).replace(
      /\bFaiz Fareed\b/g,
      '<a href="https://www.linkedin.com/in/faiz-fareed-b7b746235/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Faiz Fareed LinkedIn profile">Faiz Fareed</a>'
    )
  }

  // 4. English Access Scholarship (Image 4): RELO and COMSATS University Islamabad -> accesscuiwah
  if (slug === 'award-english-access-scholarship') {
    res = res.replace(
      /\bRegional English Language Office \(RELO\)\b/g,
      '<a href="https://pk.usembassy.gov/regional-english-language-office-relo/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Regional English Language Office (RELO)">Regional English Language Office (RELO)</a>'
    ).replace(
      /\bCOMSATS University Islamabad\b/g,
      '<a href="https://www.facebook.com/accesscuiwah/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit Access Program CUI Wah on Facebook">COMSATS University Islamabad</a>'
    )
  }

  // 5. WED Competitions: World Engineering Day link
  if (slug === 'extra-wfeo-hackathon-2026' || slug === 'extra-wed-hackathon-2025') {
    res = res.replace(
      /\bWorld Engineering Day\b/g,
      '<a href="https://worldengineeringday.net/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit World Engineering Day Official Website">World Engineering Day</a>'
    )
  }

  // 6. OMLAS: One Million Leaders Asia link
  if (slug === 'extra-omlas-fellowship-2025' || slug === 'extra-lgs-panel-discussion') {
    res = res.replace(
      /\bOne Million Leaders Asia \(OMLAS\)\b/g,
      '<a href="https://onemillionleadersasia.org/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit One Million Leaders Asia Official Website">One Million Leaders Asia (OMLAS)</a>'
    ).replace(
      /\bOne Million Leaders Asia\b/g,
      '<a href="https://onemillionleadersasia.org/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit One Million Leaders Asia Official Website">One Million Leaders Asia</a>'
    ).replace(
      /\bOMLAS Fellows\b/g,
      '<a href="https://onemillionleadersasia.org/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit One Million Leaders Asia Official Website">OMLAS Fellows</a>'
    ).replace(
      /\bOMLAS\b(?![^<]*>)/g,
      '<a href="https://onemillionleadersasia.org/" target="_blank" rel="noopener noreferrer" class="person-mention-link" title="Visit One Million Leaders Asia Official Website">OMLAS</a>'
    )
  }

  return res
}
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
          <h2 class="archive-institution-name">
            <!-- Exact GIKI hyperlink for CONSTRUCTX 3.0 (Image 4) -->
            <template v-if="item.slug === 'extra-constructx-giki'">
              <span>ICE Chapter, </span>
              <a
                href="https://giki.edu.pk/"
                target="_blank"
                rel="noopener noreferrer"
                class="institution-title-link"
                title="Visit Ghulam Ishaq Khan Institute (GIKI) official website"
              >
                <span>GIK Institute</span>
                <span class="external-icon" aria-hidden="true">↗</span>
              </a>
            </template>
            <a
              v-else-if="item.organizationUrl"
              :href="item.organizationUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="institution-title-link"
              :title="`Visit official website of ${item.organization}`"
            >
              <span>{{ item.organization }}</span>
              <span class="external-icon" aria-hidden="true">↗</span>
            </a>
            <template v-else>{{ item.organization || item.subtitle }}</template>
          </h2>
          <p v-if="item.organization && item.subtitle" class="archive-location-name">{{ item.subtitle }}</p>
        </div>

        <!-- Outlined Pill Badge: ONLY SSRN Preprint is linked; all other sub pages unlinked (Image 1) -->
        <div class="archive-badge-wrap">
          <a
            v-if="item.slug === 'bim-to-ar-research' && item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="archive-pill-badge archive-pill-badge-link"
            :title="item.linkLabel || 'Open Research Manuscript & Preprint on SSRN ↗'"
          >
            <span>{{ item.badge || item.subtitle || item.period }}</span>
            <span class="badge-link-icon" aria-hidden="true">↗</span>
          </a>
          <span v-else class="archive-pill-badge">
            {{ item.badge || item.subtitle || item.period }}
          </span>
        </div>

        <!-- Comprehensive Brief Lead Summary -->
        <p class="archive-summary-lead" v-html="formatPersonMentions(item.summary, item.slug)"></p>

        <!-- Subtle Divider Line matching reference image -->
        <hr class="archive-divider-line" />

        <!-- Highlights Section -->
        <div class="archive-highlights-section">
          <h3 class="highlights-heading">Key highlights</h3>
          <ul class="highlights-list">
            <li v-for="d in item.details" :key="d" v-html="formatPersonMentions(d, item.slug)"></li>
          </ul>
        </div>

        <!-- Associated Competencies & Tools -->
        <div v-if="item.tools && item.tools.length" class="core-topics-area">
          <p class="topics-label">Associated Competencies &amp; Tools</p>
          <div class="tag-list mini-tags">
            <span v-for="t in item.tools" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <nav class="archive-bottom-nav" aria-label="Section navigation">
          <RouterLink :to="backTarget.to" class="text-link">
            ← Back to {{ backTarget.label }}
          </RouterLink>
        </nav>
      </section>

      <!-- Right Column: Real Media Archive Window -->
      <aside class="archive-visual-col">
        <MediaArchiveWindow
          :archive="mediaArchive"
          :fallback-title="item.title"
          :fallback-section="item.sectionTitle"
          :fallback-organization="item.organization"
          :fallback-period="item.period"
          :fallback-subtitle="item.subtitle"
          :fallback-badge="item.badge"
          :is-project="item.sectionId === 'projects' && !['retaining-walls', 'retaining-walls-design'].includes(item.slug)"
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

.institution-title-link {
  color: var(--accent) !important;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 150ms ease, text-decoration-color 150ms ease;
}

.institution-title-link:hover {
  color: var(--accent-hover, #991b1b) !important;
  text-decoration-color: var(--accent-hover, #991b1b);
}

.institution-title-link .external-icon {
  font-size: 0.82em;
  color: var(--accent) !important;
  transition: transform 150ms ease, color 150ms ease;
}

.institution-title-link:hover .external-icon {
  color: var(--accent-hover, #991b1b) !important;
  transform: translate(2px, -2px);
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

:deep(.person-mention-link),
:deep(.rich-mention-link) {
  color: var(--accent) !important;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  font-weight: 600;
  transition: color 150ms ease, text-decoration-color 150ms ease;
  display: inline;
}

:deep(.person-mention-link:hover),
:deep(.rich-mention-link:hover) {
  color: var(--accent-hover, #991b1b) !important;
  text-decoration-color: var(--accent-hover, #991b1b);
}

.archive-summary-lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #404046;
  margin-bottom: 28px;
  text-align: justify;
  text-justify: inter-word;
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
