<script setup lang="ts">
import { computed, ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
import { academicItems, type AcademicItem } from '../content/academicItems'

const awards = academicItems.filter(item => item.sectionId === 'honors-awards')
const goldMedal = computed(() => awards.find(a => a.slug === 'award-gold-medalist') || awards[0])

const selectedCategory = ref('All')
const categories = ['All', 'Distinctions', 'Scholarships', 'Competitions']

function getAwardType(item: AcademicItem): 'medal' | 'scholarship' | 'competition' | 'distinction' {
  const t = `${item.title} ${item.subtitle || ''}`.toLowerCase()
  if (t.includes('gold medal') || t.includes('medalist')) return 'medal'
  if (t.includes('scholarship') || t.includes('laptop') || t.includes('grant') || t.includes('waiver')) return 'scholarship'
  if (t.includes('competition') || t.includes('winner') || t.includes('best survey') || t.includes('open house') || t.includes('truss') || t.includes('sfd & bmd')) return 'competition'
  return 'distinction'
}

function matchesCategory(item: AcademicItem, cat: string) {
  if (cat === 'All') return true
  const type = getAwardType(item)
  if (cat === 'Scholarships') return type === 'scholarship'
  if (cat === 'Competitions') return type === 'competition'
  if (cat === 'Distinctions') return type === 'medal' || type === 'distinction'
  return true
}

function getBadge(item: AcademicItem): { label: string; isPrimary: boolean } {
  if (item.slug === 'award-gold-medalist') {
    return { label: 'TOP HONOR', isPrimary: true }
  }
  const type = getAwardType(item)
  if (type === 'scholarship') {
    return { label: 'SCHOLARSHIP', isPrimary: false }
  }
  if (type === 'competition') {
    return { label: 'COMPETITION', isPrimary: false }
  }
  return { label: 'ACADEMIC MERIT', isPrimary: false }
}

const filtered = computed(() => {
  if (selectedCategory.value === 'All') return awards
  return awards.filter(item => matchesCategory(item, selectedCategory.value))
})

function reset() {
  selectedCategory.value = 'All'
}
</script>

<template>
  <div class="shell page-body">
    <!-- Compact bold header line without extra body paragraph -->
    <PageIntro
      eyebrow="Honours and Awards / Distinctions"
      title="Academic distinctions, merit scholarships, and engineering honors."
    />

    <!-- ====================================================================
         1. PRIMARY HONOUR: BS CIVIL ENGINEERING GOLD MEDAL (SPOTLIGHT CARD)
         ==================================================================== -->
    <section
      v-if="goldMedal"
      class="featured-medal-card"
      aria-labelledby="primary-gold-medal-title"
    >
      <!-- Left corner small visual with black background & gold medal -->
      <div class="featured-medal-thumbnail" aria-hidden="true">
        <svg viewBox="0 0 160 170" role="img" class="medal-thumbnail-svg" aria-label="University Gold Medal Emblem">
          <!-- Subtle Grid -->
          <g class="thumbnail-grid" stroke="currentColor" stroke-width="0.5">
            <line x1="12" y1="35" x2="148" y2="35" />
            <line x1="12" y1="85" x2="148" y2="85" />
            <line x1="12" y1="135" x2="148" y2="135" />
            <line x1="40" y1="12" x2="40" y2="158" />
            <line x1="80" y1="12" x2="80" y2="158" />
            <line x1="120" y1="12" x2="120" y2="158" />
          </g>

          <!-- Outer Gold Medal Radiance Ring -->
          <circle cx="80" cy="72" r="44" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.45" />
          <circle cx="80" cy="72" r="38" stroke="var(--accent)" stroke-width="2" fill="rgba(33, 166, 93, 0.14)" />
          <circle cx="80" cy="72" r="32" stroke="currentColor" stroke-width="0.8" opacity="0.35" />

          <!-- Center Star & Laurels -->
          <text x="80" y="80" text-anchor="middle" font-size="22" fill="var(--accent)">★</text>

          <!-- Hanging Medal Ribbon V-Shape -->
          <path d="M 66 108 L 52 152 L 74 140 L 80 152 L 86 140 L 108 152 L 94 108 Z" stroke="var(--accent)" stroke-width="1.5" fill="rgba(33, 166, 93, 0.2)" />

          <!-- Top Micro Watermark -->
          <text x="80" y="24" text-anchor="middle" class="thumbnail-watermark">
            VALEDICTORIAN
          </text>
        </svg>
      </div>

      <div class="featured-medal-content">
        <div class="featured-medal-badge-row">
          <div class="badge-row-left">
            <span class="award-index featured-index">#01</span>
            <span class="primary-distinction-tag">PRIMARY HONOUR</span>
            <span class="standing-pill">ACADEMIC HONOUR</span>
          </div>
          <span class="primary-year-badge">{{ goldMedal.period || '2026' }}</span>
        </div>

        <h2 id="primary-gold-medal-title" class="featured-medal-title">
          BS Civil Engineering — University Gold Medal (1st in Graduating Class)
        </h2>

        <p class="featured-medal-institution">
          {{ goldMedal.organization || 'COMSATS University Islamabad, Wah Campus' }} · Department of Civil Engineering
        </p>

        <p class="featured-medal-desc">
          Awarded on July 6, 2026 for graduating first in class with a Cumulative GPA of 3.95 / 4.00 (98% aggregate) across all 8 undergraduate semesters. Completed 137 registered credit hours with 541.26 total quality points, achieving straight A/A- grades throughout all advanced structural analysis and reinforced concrete design coursework.
        </p>

        <!-- Academic Distinction Metrics Pills -->
        <div class="featured-medal-metrics-pills">
          <span class="featured-metric-pill">
            <strong>CGPA:</strong> 3.95 / 4.00 (98%)
          </span>
          <span class="featured-metric-pill">
            <strong>Standing:</strong> 1st Position in Batch
          </span>
          <span class="featured-metric-pill">
            <strong>Credits:</strong> 137 Cr. Hrs (541.26 QP)
          </span>
          <span class="featured-metric-pill">
            <strong>Merit History:</strong> 8x Consecutive Semesters
          </span>
        </div>

        <div class="featured-medal-divider" aria-hidden="true"></div>

        <!-- Action Links & Tags -->
        <div class="featured-medal-footer">
          <div class="featured-tags">
            <span
              v-for="tag in (goldMedal.tools || []).slice(0, 3)"
              :key="tag"
              class="featured-tag-pill"
            >
              {{ tag }}
            </span>
          </div>
          <div class="featured-medal-actions">
            <RouterLink :to="{ path: `/academic/honors-awards/${goldMedal.slug}`, query: { from: 'recognition' } }" class="featured-primary-btn">
              View Gold Medal record <span aria-hidden="true">↗</span>
            </RouterLink>
            <a
              v-if="goldMedal.link"
              :href="goldMedal.link"
              target="_blank"
              rel="noopener noreferrer"
              class="featured-secondary-link"
            >
              {{ goldMedal.linkLabel || 'Official Verification (PDF)' }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================================
         2. SECTION HEADER & CATEGORY FILTERS
         ==================================================================== -->
    <div class="section-divider-block">
      <div class="divider-text-group">
        <p class="eyebrow">ACADEMIC ARCHIVE &amp; COMPETITION PODIUMS</p>
        <h2 class="sub-section-heading">All Honours, Scholarships &amp; Awards</h2>
      </div>
    </div>

    <div class="filter-controls-row">
      <div class="filter-group" aria-label="Filter distinctions">
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
        {{ filtered.length }} {{ filtered.length === 1 ? 'distinction & award' : 'distinctions & awards' }}
      </p>
    </div>

    <!-- ====================================================================
         3. AWARDS INFORMATION CARDS GRID
         ==================================================================== -->
    <div v-if="filtered.length" class="awards-grid">
      <RouterLink
        v-for="item in filtered"
        :key="item.slug"
        :to="{ path: `/academic/honors-awards/${item.slug}`, query: { from: 'recognition' } }"
        class="award-card"
        :aria-label="`View details for ${item.title}`"
      >
        <!-- Card Header: Index, Badge, and Year -->
        <div class="award-card-header">
          <div class="award-header-left">
            <span class="award-index">#{{ String(awards.findIndex(a => a.slug === item.slug) + 1).padStart(2, '0') }}</span>
            <span class="award-badge" :class="{ 'badge-primary': getBadge(item).isPrimary }">
              {{ getBadge(item).label }}
            </span>
          </div>
          <span class="award-period">{{ item.period || 'ARCHIVE' }}</span>
        </div>

        <!-- Eyebrow Subtitle -->
        <p class="award-eyebrow">{{ item.subtitle || 'Academic Distinction' }}</p>

        <!-- Title -->
        <h3 class="award-title">{{ item.title }}</h3>

        <!-- Organization / Institution -->
        <p class="award-org">{{ item.organization || 'COMSATS University Islamabad' }}</p>

        <!-- Summary Description -->
        <p class="award-desc">{{ item.summary }}</p>

        <!-- Subtle Card Divider -->
        <div class="award-divider" aria-hidden="true"></div>

        <!-- Card Footer: Tags + Arrow Link -->
        <div class="award-card-footer">
          <div class="award-tags">
            <span
              v-for="tool in (item.tools || []).slice(0, 2)"
              :key="tool"
              class="award-tag-pill"
            >
              {{ tool }}
            </span>
          </div>
          <span class="award-arrow" aria-hidden="true">↗</span>
        </div>
      </RouterLink>
    </div>

    <div v-else class="empty-state">
      <h2>No distinctions found in this category.</h2>
      <p>Select another category or view all awards.</p>
      <button class="button" @click="reset">Show all honours &amp; awards</button>
    </div>
  </div>
</template>

<style scoped>
/* Page Intro font size override - compact & professional, utilizes full horizontal space */
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

@media (min-width: 820px) {
  :deep(.page-intro h1) {
    white-space: nowrap;
  }
}

/* ==========================================================================
   1. PRIMARY FEATURED GOLD MEDAL SPOTLIGHT CARD (WIDE, SHALLOW & CENTERED)
   ========================================================================== */
.featured-medal-card {
  display: grid;
  grid-template-columns: 130px 1fr;
  width: 100%;
  max-width: 1080px;
  margin-inline: auto;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 22px;
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  position: relative;
}

.featured-medal-card:hover {
  border-color: var(--accent);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}

.featured-medal-thumbnail {
  background: #0B0E10;
  border-right: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 10px;
  overflow: hidden;
  position: relative;
}

.medal-thumbnail-svg {
  width: 100%;
  max-width: 105px;
  height: auto;
  max-height: 150px;
  display: block;
}

.thumbnail-grid {
  opacity: 0.12;
}

.thumbnail-watermark {
  fill: var(--accent-link);
  font-family: var(--mono);
  font-size: 8.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  opacity: 0.85;
}

.featured-medal-content {
  padding: 15px 20px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-medal-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}

.badge-row-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.featured-index {
  font-size: 0.82rem;
}

.primary-distinction-tag {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--accent-link);
  background: var(--accent-soft);
  border: 1px solid rgba(33, 166, 93, 0.35);
  padding: 2px 7px;
  border-radius: 2px;
  font-weight: 600;
}

.primary-year-badge {
  font-family: var(--mono);
  font-size: 0.74rem;
  color: var(--muted);
}

.standing-pill {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  padding: 2px 7px;
  border-radius: 2px;
}

.featured-medal-title {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.015em;
  color: var(--text);
  margin: 0 0 3px 0;
}

.featured-medal-institution {
  font-family: var(--mono);
  font-size: 0.76rem;
  color: var(--muted);
  margin: 0 0 8px 0;
}

.featured-medal-desc {
  font-size: 0.8125rem;
  line-height: 1.48;
  color: rgba(230, 240, 237, 0.88);
  margin: 0 0 10px 0;
}

.featured-medal-metrics-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.featured-metric-pill {
  font-family: var(--mono);
  font-size: 0.7rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 2px 8px;
  border-radius: 2px;
  white-space: nowrap;
}

.featured-metric-pill strong {
  color: var(--accent);
}

.featured-medal-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 10px;
}

.featured-medal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.featured-tag-pill {
  font-family: var(--mono);
  font-size: 0.64rem;
  padding: 2px 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--muted);
}

.featured-medal-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.featured-primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: var(--accent-primary);
  color: var(--text-on-primary);
  border: 1px solid var(--accent-primary-border);
  padding: 5px 12px;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 550;
  text-decoration: none;
  transition: background 160ms ease, border-color 160ms ease, transform 140ms ease;
}

.featured-primary-btn:hover {
  background: var(--accent-primary-hover);
  border-color: var(--accent-hover);
  transform: translateY(-1px);
}

.featured-secondary-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--accent-link);
  font-size: 0.8rem;
  font-weight: 550;
  text-decoration: none;
  transition: color 160ms ease;
}

.featured-secondary-link:hover {
  color: var(--accent-link-hover);
}

/* ==========================================================================
   2. SECTION HEADER & FILTERS
   ========================================================================== */
.section-divider-block {
  border-top: 1px solid var(--line);
  padding-top: 18px;
  margin-bottom: 10px;
}

.sub-section-heading {
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin-top: 4px;
}

.filter-controls-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
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
   3. AWARDS INFORMATION CARDS GRID (COMPACT 4 IN A ROW)
   ========================================================================== */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  align-items: stretch;
}

.award-card {
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

.award-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
}

.award-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
}

.award-header-left {
  display: flex;
  align-items: center;
  gap: 7px;
}

.award-index {
  font-family: var(--mono);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-link);
}

.award-badge {
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

.award-badge.badge-primary {
  color: var(--accent-link);
  border: 1px solid rgba(33, 166, 93, 0.45);
  background: var(--accent-soft);
}

.award-period {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.award-eyebrow {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  color: rgba(181, 195, 191, 0.7);
  margin: 0 0 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.award-title {
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

.award-card:hover .award-title {
  color: var(--accent);
}

.award-org {
  font-size: 0.78rem;
  line-height: 1.4;
  color: var(--muted);
  margin: 0 0 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.award-desc {
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

.award-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
  margin-bottom: 10px;
}

.award-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.award-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  overflow: hidden;
}

.award-tag-pill {
  font-family: var(--mono);
  font-size: 0.64rem;
  padding: 2px 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--muted);
  white-space: nowrap;
}

.award-arrow {
  color: var(--accent-link);
  font-size: 0.95rem;
  font-weight: 600;
  transition: transform 160ms ease, color 160ms ease;
  flex-shrink: 0;
}

.award-card:hover .award-arrow {
  transform: translate(2px, -2px);
  color: var(--accent-link-hover);
}

.empty-state {
  padding: 48px;
  border: 1px solid var(--line);
  background: var(--surface);
  text-align: center;
  border-radius: 2px;
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

/* ==========================================================================
   4. RESPONSIVE QUERIES
   ========================================================================== */
@media (max-width: 1140px) {
  .awards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}

@media (max-width: 768px) {
  .featured-medal-card {
    grid-template-columns: 1fr;
  }

  .featured-medal-thumbnail {
    border-right: none;
    border-bottom: 1px solid var(--line);
    max-height: 90px;
    padding: 8px;
  }

  .medal-thumbnail-svg {
    max-width: 80px;
    max-height: 80px;
  }
}

@media (max-width: 680px) {
  .awards-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .featured-medal-content {
    padding: 14px 16px;
  }

  .featured-medal-title {
    font-size: 1.1rem;
  }

  .featured-medal-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-controls-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
