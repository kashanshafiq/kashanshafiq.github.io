<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { academicCv } from '../content/academicCv'
import { academicItems } from '../content/academicItems'
import { educationList } from '../content/education'

const route = useRoute()

const navItems = [
  { id: 'personal-info', num: '01', label: 'Personal Information' },
  { id: 'education', num: '02', label: 'Education' },
  { id: 'research-experience', num: '03', label: 'Research Experience' },
  { id: 'work-experience', num: '04', label: 'Work Experience' },
  { id: 'projects', num: '05', label: 'Academic Projects' },
  { id: 'certifications', num: '06', label: 'Certifications' },
  { id: 'professional-trainings', num: '07', label: 'Professional training & CPD' },
  { id: 'conferences', num: '08', label: 'Conferences' },
  { id: 'skills', num: '09', label: 'Skills' },
  { id: 'honors-awards', num: '10', label: 'Honours & Awards' },
  { id: 'volunteering', num: '11', label: 'Volunteering' },
  { id: 'extracurricular', num: '12', label: 'Extracurricular Activities & Leadership' },
  { id: 'languages', num: '13', label: 'Language Skills' },
]

const activeId = ref('personal-info')
let observer: IntersectionObserver | null = null

const copiedField = ref<string | null>(null)
const copiedToast = ref<string | null>(null)
let copyTimeout: number | undefined

async function copyContact(text: string, label: string) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copiedField.value = label
    copiedToast.value = `${label} copied to clipboard!`
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = window.setTimeout(() => {
      copiedField.value = null
      copiedToast.value = null
    }, 2400)
  } catch {
    copiedField.value = null
  }
}

const getSectionItems = (sectionId: string) =>
  academicItems.filter((i) => i.sectionId === sectionId)

const expandedSections = ref<Record<string, boolean>>({
  'projects': false,
  'certifications': false,
  'professional-trainings': false,
  'honors-awards': false,
  'extracurricular': false,
})

const isExpanded = (sectionId: string) => !!expandedSections.value[sectionId]

const toggleSection = (sectionId: string) => {
  expandedSections.value[sectionId] = !expandedSections.value[sectionId]
}

const getVisibleItems = (sectionId: string) => {
  const items = getSectionItems(sectionId)
  if (items.length <= 6 || isExpanded(sectionId)) {
    return items
  }
  return items.slice(0, 6)
}

const skillsCategories = [
  {
    title: 'Core Competencies',
    badge: 'Structural & Construction',
    skills: [
      'Structural Analysis & Design',
      'Reinforced Concrete Design (ACI 318-19)',
      'Steel Structure Design (AISC)',
      'Seismic & Gravity Load Analysis (ASCE 7-16, UBC 97)',
      'Reinforcement Detailing & Foundation Design',
      'Post-Tensioned Slab Coordination',
      'Manual & Software-Based Structural Verification',
      'BIM-Integrated Structural Coordination',
      'Quantity Takeoff & Cost Estimation',
      'Site QA/QC Inspection',
    ],
  },
  {
    title: 'Software & Tools',
    badge: 'BIM & Computation',
    skills: [
      'ETABS',
      'SAFE',
      'RISA 2D',
      'Autodesk Revit (Structure & Architecture, LOD 200–400)',
      'AutoCAD 2D',
      'Microsoft Office',
      'Microsoft Excel (Parametric Design Sheets)',
    ],
  },
  {
    title: 'Soft Skills',
    badge: 'Leadership & Collaboration',
    skills: [
      'Leadership & Team Coordination',
      'Critical Thinking & Problem-Solving',
      'Cross-Disciplinary Collaboration',
      'Sustainability-Driven Design Thinking',
      'Public Speaking & Technical Communication',
      'Independent Research & Self-Directed Learning',
    ],
  },
]

function scrollToSection(id: string) {
  activeId.value = id
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  if (route.hash) {
    const rawId = route.hash.replace('#', '')
    setTimeout(() => {
      scrollToSection(rawId)
    }, 120)
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-15% 0px -70% 0px',
      threshold: 0,
    }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) observer?.observe(el)
  })
})

watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      scrollToSection(newHash.replace('#', ''))
    }
  }
)

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="shell page-body cv-layout-wrapper">
    <div class="cv-body-grid">
      <!-- Left Sticky Navigation Panel (aligned right from top to maximize space utilization) -->
      <aside class="cv-nav-panel no-print" aria-label="Curriculum Vitae section directory">
        <div class="nav-panel-sticky">
          <p class="panel-eyebrow">ACADEMIC PROFILE</p>
          <nav class="cv-toc-nav">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              :class="['toc-link', { active: activeId === item.id }]"
              @click.prevent="scrollToSection(item.id)"
            >
              <span class="toc-num">{{ item.num }}</span>
              <span class="toc-label">{{ item.label }}</span>
            </a>
          </nav>
        </div>
      </aside>

      <!-- Main Profile Sections (Right Column) -->
      <main class="cv-main-content">
        <!-- Top Title & Eyebrow Header Block aligned as column with Personal Info -->
        <header class="cv-header-block">
          <p class="cv-eyebrow">ACADEMICS / COMPREHENSIVE CURRICULUM VITAE</p>
          <h1 class="cv-hero-title">{{ academicCv.personalInfo.name }}</h1>
          <p class="cv-hero-role">{{ academicCv.personalInfo.keywords }}</p>
          <div class="cv-hero-actions">
            <RouterLink class="button primary" to="/#contact">
              Get in touch <span aria-hidden="true">↓</span>
            </RouterLink>
          </div>
        </header>

        <!-- 01. Personal Information -->
        <section id="personal-info" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">01</span>
            <h2>Personal Information</h2>
          </div>
          <div class="card personal-card">
            <!-- Horizontal Contact Meta Bar to maximize space and eliminate redundant names/degrees -->
            <div class="personal-meta-horizontal">
              <div class="meta-item">
                <span class="meta-label">Location</span>
                <span class="meta-val">{{ academicCv.personalInfo.location }}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Direct Email</span>
                <div class="meta-interactive-contact">
                  <a
                    :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${academicCv.personalInfo.email}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="meta-val link-val clickable-contact"
                    @click="copyContact(academicCv.personalInfo.email, 'Email address')"
                    title="Click to copy email address"
                    aria-label="Compose email to Kashan Shafiq on Gmail (and copy email address to clipboard)"
                  >
                    {{ academicCv.personalInfo.email }} ↗
                  </a>
                  <span v-if="copiedField === 'Email address'" class="inline-copied-pill">Copied!</span>
                </div>
              </div>
              <div class="meta-item">
                <span class="meta-label">Phone / WhatsApp</span>
                <div class="meta-interactive-contact">
                  <a
                    :href="`tel:${academicCv.personalInfo.phone}`"
                    class="meta-val link-val clickable-contact"
                    @click="copyContact(academicCv.personalInfo.phone, 'Phone number')"
                    title="Click to copy phone number"
                    aria-label="Call or WhatsApp Kashan Shafiq (and copy phone number to clipboard)"
                  >
                    {{ academicCv.personalInfo.phone }}
                  </a>
                  <span v-if="copiedField === 'Phone number'" class="inline-copied-pill">Copied!</span>
                </div>
              </div>
              <div class="meta-item">
                <span class="meta-label">LinkedIn</span>
                <a
                  :href="academicCv.personalInfo.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="meta-val link-val"
                >
                  linkedin.com/in/kashan-shafiq ↗
                </a>
              </div>
            </div>
            <p class="personal-summary-text">{{ academicCv.personalInfo.summary }}</p>
          </div>
        </section>

        <!-- 02. Education -->
        <section id="education" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">02</span>
            <h2>Education</h2>
          </div>

          <div class="education-interactive-list">
            <RouterLink
              v-for="edu in educationList"
              :key="edu.slug"
              :to="`/education/${edu.slug}`"
              class="education-row"
              :aria-label="`View details for ${edu.shortDegree} at ${edu.institution}`"
            >
              <div class="edu-row-years">
                {{ edu.years }}
              </div>
              <div class="edu-row-content">
                <h3 class="edu-row-title">{{ edu.shortDegree }}</h3>
                <p class="edu-row-institution">{{ edu.institution }}</p>
              </div>
              <div class="edu-row-arrow" aria-hidden="true">
                ↗
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- 03. Research Experience -->
        <section id="research-experience" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">03</span>
            <h2>Research Experience</h2>
          </div>

          <div class="education-interactive-list">
            <RouterLink
              v-for="item in getSectionItems('research-experience')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="education-row"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="edu-row-years">
                {{ item.period }}
              </div>
              <div class="edu-row-content">
                <h3 class="edu-row-title">{{ item.title }}</h3>
                <p class="edu-row-institution">{{ item.organization }}</p>
              </div>
              <div class="edu-row-arrow" aria-hidden="true">
                ↗
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- 04. Work Experience -->
        <section id="work-experience" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">04</span>
            <h2>Work Experience</h2>
          </div>

          <div class="education-interactive-list">
            <RouterLink
              v-for="item in getSectionItems('work-experience')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="education-row"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="edu-row-years">
                {{ item.period }}
              </div>
              <div class="edu-row-content">
                <h3 class="edu-row-title">{{ item.title }}</h3>
                <p class="edu-row-institution">{{ item.organization }}</p>
              </div>
              <div class="edu-row-arrow" aria-hidden="true">
                ↗
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- 05. Academic Projects -->
        <section id="projects" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">05</span>
            <h2>Academic Projects</h2>
          </div>

          <div class="cv-grid-two-col">
            <RouterLink
              v-for="item in getVisibleItems('projects')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="cv-grid-item"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="grid-item-year">{{ item.period }}</div>
              <div class="grid-item-body">
                <div class="grid-item-header">
                  <h3 class="grid-item-title">{{ item.title }}</h3>
                  <span class="grid-item-arrow" aria-hidden="true">↗</span>
                </div>
                <p class="grid-item-summary">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>

          <div v-if="getSectionItems('projects').length > 6" class="section-show-more-bar">
            <button
              type="button"
              class="show-more-btn"
              @click="toggleSection('projects')"
              :aria-expanded="isExpanded('projects')"
            >
              <span>{{ isExpanded('projects') ? 'Show Less' : 'Show More' }}</span>
              <span class="btn-symbol">{{ isExpanded('projects') ? '−' : '+' }}</span>
            </button>
            <span class="showing-counter">
              Showing {{ getVisibleItems('projects').length }} of {{ getSectionItems('projects').length }}
            </span>
          </div>
        </section>

        <!-- 06. Certifications -->
        <section id="certifications" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">06</span>
            <h2>Certifications</h2>
          </div>

          <div class="cv-grid-two-col">
            <RouterLink
              v-for="item in getVisibleItems('certifications')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="cv-grid-item"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="grid-item-year">{{ item.period }}</div>
              <div class="grid-item-body">
                <div class="grid-item-header">
                  <h3 class="grid-item-title">{{ item.title }}</h3>
                  <span class="grid-item-arrow" aria-hidden="true">↗</span>
                </div>
                <p class="grid-item-summary">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>

          <div v-if="getSectionItems('certifications').length > 6" class="section-show-more-bar">
            <button
              type="button"
              class="show-more-btn"
              @click="toggleSection('certifications')"
              :aria-expanded="isExpanded('certifications')"
            >
              <span>{{ isExpanded('certifications') ? 'Show Less' : 'Show More' }}</span>
              <span class="btn-symbol">{{ isExpanded('certifications') ? '−' : '+' }}</span>
            </button>
            <span class="showing-counter">
              Showing {{ getVisibleItems('certifications').length }} of {{ getSectionItems('certifications').length }}
            </span>
          </div>
        </section>

        <!-- 07. Professional training & CPD -->
        <section id="professional-trainings" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">07</span>
            <h2>Professional training &amp; CPD</h2>
          </div>

          <div class="cv-grid-two-col">
            <RouterLink
              v-for="item in getVisibleItems('professional-trainings')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="cv-grid-item"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="grid-item-year">{{ item.period }}</div>
              <div class="grid-item-body">
                <div class="grid-item-header">
                  <h3 class="grid-item-title">{{ item.title }}</h3>
                  <span class="grid-item-arrow" aria-hidden="true">↗</span>
                </div>
                <p class="grid-item-summary">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>

          <div v-if="getSectionItems('professional-trainings').length > 6" class="section-show-more-bar">
            <button
              type="button"
              class="show-more-btn"
              @click="toggleSection('professional-trainings')"
              :aria-expanded="isExpanded('professional-trainings')"
            >
              <span>{{ isExpanded('professional-trainings') ? 'Show Less' : 'Show More' }}</span>
              <span class="btn-symbol">{{ isExpanded('professional-trainings') ? '−' : '+' }}</span>
            </button>
            <span class="showing-counter">
              Showing {{ getVisibleItems('professional-trainings').length }} of {{ getSectionItems('professional-trainings').length }}
            </span>
          </div>
        </section>

        <!-- 08. Conferences -->
        <section id="conferences" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">08</span>
            <h2>Conferences</h2>
          </div>

          <div class="education-interactive-list">
            <RouterLink
              v-for="item in getSectionItems('conferences')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="education-row"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="edu-row-years">
                {{ item.period }}
              </div>
              <div class="edu-row-content">
                <h3 class="edu-row-title">{{ item.title }}</h3>
                <p class="edu-row-institution">{{ item.organization || item.subtitle }}</p>
              </div>
              <div class="edu-row-arrow" aria-hidden="true">
                ↗
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- 09. Skills -->
        <section id="skills" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">09</span>
            <h2>Skills</h2>
          </div>

          <div class="skills-three-col">
            <div
              v-for="cat in skillsCategories"
              :key="cat.title"
              class="skill-box-card"
            >
              <div class="skill-box-top">
                <span class="skill-box-badge">{{ cat.badge }}</span>
                <h3 class="skill-box-title">{{ cat.title }}</h3>
              </div>
              <ul class="skill-items-list">
                <li v-for="skill in cat.skills" :key="skill" class="skill-item">
                  <span class="skill-bullet" aria-hidden="true">✦</span>
                  <span class="skill-text">{{ skill }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 10. Honours & Awards -->
        <section id="honors-awards" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">10</span>
            <h2>Honours &amp; Awards</h2>
          </div>

          <div class="cv-grid-two-col">
            <RouterLink
              v-for="item in getVisibleItems('honors-awards')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="cv-grid-item"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="grid-item-year">{{ item.period }}</div>
              <div class="grid-item-body">
                <div class="grid-item-header">
                  <h3 class="grid-item-title">{{ item.title }}</h3>
                  <span class="grid-item-arrow" aria-hidden="true">↗</span>
                </div>
                <p class="grid-item-summary">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>

          <div v-if="getSectionItems('honors-awards').length > 6" class="section-show-more-bar">
            <button
              type="button"
              class="show-more-btn"
              @click="toggleSection('honors-awards')"
              :aria-expanded="isExpanded('honors-awards')"
            >
              <span>{{ isExpanded('honors-awards') ? 'Show Less' : 'Show More' }}</span>
              <span class="btn-symbol">{{ isExpanded('honors-awards') ? '−' : '+' }}</span>
            </button>
            <span class="showing-counter">
              Showing {{ getVisibleItems('honors-awards').length }} of {{ getSectionItems('honors-awards').length }}
            </span>
          </div>
        </section>

        <!-- 11. Volunteering -->
        <section id="volunteering" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">11</span>
            <h2>Volunteering</h2>
          </div>

          <div class="education-interactive-list">
            <RouterLink
              v-for="item in getSectionItems('volunteering')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="education-row"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="edu-row-years">
                {{ item.period }}
              </div>
              <div class="edu-row-content">
                <h3 class="edu-row-title">{{ item.title }}</h3>
                <p class="edu-row-institution">{{ item.organization || item.subtitle }}</p>
              </div>
              <div class="edu-row-arrow" aria-hidden="true">
                ↗
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- 12. Extracurricular Activities & Leadership -->
        <section id="extracurricular" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">12</span>
            <h2>Extracurricular Activities &amp; Leadership</h2>
          </div>

          <div class="cv-grid-two-col">
            <RouterLink
              v-for="item in getVisibleItems('extracurricular')"
              :key="item.slug"
              :to="{ path: `/academic/${item.sectionId}/${item.slug}`, query: { from: 'cv' } }"
              class="cv-grid-item"
              :aria-label="`View details for ${item.title}`"
            >
              <div class="grid-item-year">{{ item.period }}</div>
              <div class="grid-item-body">
                <div class="grid-item-header">
                  <h3 class="grid-item-title">{{ item.title }}</h3>
                  <span class="grid-item-arrow" aria-hidden="true">↗</span>
                </div>
                <p class="grid-item-summary">{{ item.summary }}</p>
              </div>
            </RouterLink>
          </div>

          <div v-if="getSectionItems('extracurricular').length > 6" class="section-show-more-bar">
            <button
              type="button"
              class="show-more-btn"
              @click="toggleSection('extracurricular')"
              :aria-expanded="isExpanded('extracurricular')"
            >
              <span>{{ isExpanded('extracurricular') ? 'Show Less' : 'Show More' }}</span>
              <span class="btn-symbol">{{ isExpanded('extracurricular') ? '−' : '+' }}</span>
            </button>
            <span class="showing-counter">
              Showing {{ getVisibleItems('extracurricular').length }} of {{ getSectionItems('extracurricular').length }}
            </span>
          </div>
        </section>

        <!-- 13. Language Skills (Clean display in-place without sub-pages) -->
        <section id="languages" class="cv-section">
          <div class="section-badge-header">
            <span class="section-num">13</span>
            <h2>Language Skills</h2>
          </div>

          <div class="languages-grid">
            <article
              v-for="lang in academicCv.languages"
              :key="lang.language"
              class="card lang-card"
            >
              <div class="lang-top">
                <h3 class="lang-name">{{ lang.language }}</h3>
                <span class="lang-pill">{{ lang.level }}</span>
              </div>
              <p class="lang-note">{{ lang.detail }}</p>
            </article>
          </div>
        </section>
      </main>
    </div>

    <!-- Floating Copied Toast -->
    <Transition name="fade-toast">
      <div v-if="copiedToast" class="contact-copy-toast" role="status" aria-live="polite">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{{ copiedToast }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cv-layout-wrapper {
  max-width: 1360px;
  padding-top: 24px;
}

.cv-body-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  align-items: start;
}

/* Sticky Left Panel */
.cv-nav-panel {
  position: sticky;
  top: 84px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding-right: 8px;
}

.nav-panel-sticky {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 20px 16px;
}

.panel-eyebrow {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
  font-weight: 600;
  text-transform: uppercase;
}

.cv-toc-nav {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.toc-link {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 8px 12px;
  border-radius: 2px;
  text-decoration: none;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.35;
  transition: all 140ms ease;
  border-left: 3px solid transparent;
}

.toc-num {
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 750;
  color: #000000 !important;
  flex-shrink: 0;
}

.toc-label {
  flex-grow: 1;
}

.toc-link:hover {
  color: var(--text);
  background: var(--surface-raised);
}

.toc-link.active {
  color: var(--text);
  background: var(--accent-selected);
  border-left-color: var(--accent);
  font-weight: 550;
}

.toc-link.active .toc-num {
  color: #000000 !important;
  font-weight: 800;
}

/* Main Content Area */
.cv-main-content {
  display: flex;
  flex-direction: column;
  gap: 56px;
  min-width: 0;
}

/* Header block aligned at top of main column */
.cv-header-block {
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
}

.cv-eyebrow {
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
  margin: 0 0 12px 0;
}

.cv-hero-title {
  font-family: var(--font-headline);
  font-size: clamp(2.4rem, 4.2vw, 3.4rem);
  font-weight: 900;
  color: var(--text);
  line-height: 1.05;
  letter-spacing: -0.035em;
  margin: 0 0 10px 0;
}

.cv-hero-role {
  font-size: 1.15rem;
  color: var(--muted);
  margin: 0 0 20px 0;
}

.cv-hero-actions {
  display: flex;
  gap: 14px;
}

.cv-section {
  scroll-margin-top: 92px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.section-badge-header {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 4px;
}

.section-badge-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  border-top: 2px solid var(--accent);
  border-left: 2px solid var(--accent);
  border-right: 2px solid var(--accent);
  border-bottom: none;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, rgba(0, 0, 0, 0.35) 85%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 60%, rgba(0, 0, 0, 0.35) 85%, transparent 100%);
  pointer-events: none;
}

.section-num {
  font-family: var(--font-headline);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--accent);
  border: 1px solid var(--line);
  padding: 3px 8px;
  border-radius: var(--radius-btn);
  background: var(--surface);
}

.cv-section h2 {
  font-family: var(--font-headline);
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--text);
  margin: 0;
  letter-spacing: -0.02em;
}

.section-subtext {
  display: none !important;
}

/* Personal Information Card */
.personal-card {
  padding: 6px 0 0 0;
  background: transparent;
  border: none;
}

.personal-meta-horizontal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px 20px;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: #0b0f12;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.meta-val {
  font-size: 0.9rem;
  color: var(--text);
  word-break: break-word;
}

.personal-meta-horizontal .link-val {
  color: #0b0f12;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.personal-meta-horizontal .link-val:hover {
  color: var(--accent);
}

.link-val {
  color: var(--accent);
  text-decoration: none;
  transition: color 140ms ease;
}

.meta-interactive-contact {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.clickable-contact {
  cursor: pointer;
  transition: color 140ms ease;
}

.clickable-contact:hover {
  color: var(--accent);
  text-decoration: underline;
}

.inline-copied-pill {
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--accent);
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 10px;
}

.personal-summary-text {
  font-size: 0.98rem;
  color: var(--muted);
  line-height: 1.65;
  margin: 0;
}

/* Interactive List Rows (Used consistently across sections 02 to 11) */
.education-interactive-list {
  display: flex;
  flex-direction: column;
  margin-top: 0;
}

.education-row {
  display: grid;
  grid-template-columns: 140px 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 14px 12px;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: background-color 160ms ease, padding-left 160ms ease, border-color 160ms ease;
  border-radius: 2px;
}

.education-interactive-list .education-row:first-child {
  padding-top: 8px;
}

.education-row:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  padding-left: 18px;
}

.education-row:hover .edu-row-title {
  color: var(--accent);
}

.education-row:hover .edu-row-arrow {
  color: var(--accent);
  transform: translate(3px, -3px);
}

.edu-row-years {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.edu-row-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.edu-row-title {
  font-size: 1.08rem;
  font-weight: 580;
  color: var(--text);
  margin: 0;
  transition: color 160ms ease;
}

.edu-row-institution {
  font-size: 0.88rem;
  color: var(--muted);
  margin: 0;
}

.edu-row-arrow {
  font-family: var(--mono);
  font-size: 1.15rem;
  color: var(--line-strong);
  transition: transform 160ms ease, color 160ms ease;
}

/* 2-Column Grid Layout matching screenshot */
.cv-grid-two-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 52px;
  row-gap: 0;
  margin-top: 0;
}

.cv-grid-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 18px;
  align-items: start;
  padding: 14px 0 16px 0;
  border-bottom: 1px solid var(--line);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s ease;
}

.cv-grid-two-col .cv-grid-item:nth-child(-n+2) {
  padding-top: 8px;
}

.cv-grid-item:hover {
  border-bottom-color: var(--line-strong);
}

.grid-item-year {
  font-family: inherit;
  font-size: 0.88rem;
  color: var(--muted);
  padding-top: 3px;
  font-variant-numeric: tabular-nums;
  line-height: 1.3;
}

.grid-item-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.grid-item-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.grid-item-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #111111;
  line-height: 1.35;
  margin: 0;
  transition: color 0.2s ease;
}

.cv-grid-item:hover .grid-item-title {
  color: var(--accent);
}

.grid-item-arrow {
  color: var(--accent);
  font-size: 1rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  line-height: 1.2;
}

.cv-grid-item:hover .grid-item-arrow {
  transform: translate(2px, -2px);
}

.grid-item-summary {
  font-size: 0.88rem;
  color: #404046;
  line-height: 1.55;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}

/* Show More / Counter Bar */
.section-show-more-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 28px;
}

.show-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 9px 18px;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: var(--radius-btn);
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.show-more-btn:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  color: var(--accent);
}

.btn-symbol {
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
}

.showing-counter {
  font-size: 0.82rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
}

/* Section 09: Skills Three Boxes (Horizontal Layout) */
.skills-three-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 8px;
}

.skill-box-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.skill-box-card:hover {
  border-color: rgba(255, 107, 53, 0.4);
  transform: translateY(-2px);
}

.skill-box-top {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 14px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.skill-box-badge {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.skill-box-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  line-height: 1.3;
}

.skill-items-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-item {
  display: grid;
  grid-template-columns: 14px 1fr;
  gap: 10px;
  align-items: start;
  line-height: 1.45;
}

.skill-bullet {
  color: var(--accent);
  font-size: 0.72rem;
  padding-top: 3px;
  flex-shrink: 0;
}

.skill-text {
  font-size: 0.88rem;
  color: var(--text);
}

/* Section 12: Languages Grid */
.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.lang-card {
  padding: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
}

.lang-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.lang-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.lang-pill {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  background: var(--accent-surface);
  border: 1px solid var(--line);
  padding: 3px 8px;
  border-radius: 2px;
}

.lang-note {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 1100px) {
  .personal-meta-horizontal {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .cv-body-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .cv-nav-panel {
    display: none;
  }

  .cv-grid-two-col {
    grid-template-columns: 1fr;
    column-gap: 0;
  }

  .skills-three-col {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

@media (max-width: 640px) {
  .personal-meta-horizontal {
    grid-template-columns: 1fr;
  }

  .education-row {
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .edu-row-years {
    grid-column: 1 / -1;
    font-size: 0.8rem;
  }

  .cv-grid-item {
    grid-template-columns: 46px 1fr;
    gap: 14px;
    padding: 16px 0;
  }

  .section-show-more-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

/* Floating Copied Toast */
.contact-copy-toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: #111111;
  color: #FFFFFF;
  border: 1px solid var(--accent);
  padding: 10px 20px;
  border-radius: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-headline);
  font-size: 0.9rem;
  font-weight: 600;
  z-index: 9999;
  pointer-events: none;
}

.contact-copy-toast svg {
  color: var(--accent);
}

.fade-toast-enter-active,
.fade-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-toast-enter-from,
.fade-toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 12px);
}
</style>
