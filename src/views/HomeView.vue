<script setup lang="ts">
import { ref } from 'vue'
import BridgeHero from '../components/BridgeHero.vue'
import { profile } from '../content/profile'

const copiedEmail = ref(false)
let copyTimeout: number | undefined

async function copyEmail(email: string) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(email)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copiedEmail.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = window.setTimeout(() => {
      copiedEmail.value = false
    }, 2000)
  } catch {
    copiedEmail.value = false
  }
}
</script>

<template>
  <div class="shell">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow">Civil Engineer · Structures · Research</p>
        <h1 id="hero-title">KASHAN<br>SHAFIQ</h1>
        <p class="hero-headline">Civil engineer bridging structural design, digital modeling, and applied research.</p>
        <p class="hero-summary">
          I am a Civil Engineering graduate from COMSATS University Islamabad, Wah Campus, with a CGPA of 3.95/4.00 (Gold Medalist). My background pairs a solid structural design foundation with applied research and global leadership experience, centered on sustainable infrastructure. Open to graduate study and research opportunities.
        </p>
        <div class="hero-actions">
          <a class="text-link" href="#contact">
            Get in touch <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <BridgeHero />
    </section>

    <div class="discipline-strip" aria-label="Areas of practice">
      <span>Structures</span>
      <span>Digital modelling</span>
      <span>Research</span>
      <i aria-hidden="true"></i>
    </div>

    <!-- Candidate Profile Section (Scholarship Committee Pitch) -->
    <section class="candidate-profile-section" aria-label="Candidate profile and qualifications">
      <p class="eyebrow candidate-eyebrow">Candidate Profile · Core Competencies &amp; Track Record</p>

      <!-- Key Figures Strip -->
      <div class="profile-metrics-strip" role="region" aria-label="Key academic and technical figures">
        <div class="metric-cell">
          <span class="metric-val">3.95<span class="accent-mark">/4.00</span></span>
          <span class="metric-label">CGPA · Gold Medalist</span>
          <span class="metric-detail">1st in class · 8x merit positions</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">137<span class="accent-mark"> Cr</span></span>
          <span class="metric-label">Credits Completed</span>
          <span class="metric-detail">541.26 QP · POF merit scholar</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">70,000<span class="accent-mark">+</span></span>
          <span class="metric-label">BIM Elements</span>
          <span class="metric-detail">Scan-to-BIM LOD 350 at Archnetix</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">400<span class="accent-mark"> hrs</span></span>
          <span class="metric-label">U.S. Embassy Access</span>
          <span class="metric-detail">18 mos cross-cultural program</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">200<span class="accent-mark">+</span></span>
          <span class="metric-label">Students Supported</span>
          <span class="metric-detail">Curated academic database</span>
        </div>
      </div>

      <!-- Five Compact Pillars -->
      <div class="profile-pillars-grid">
        <!-- Pillar 1: Technical Depth -->
        <article class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V5l7-2 7 2v16" />
                <path d="M5 11h14" />
                <path d="M5 16h14" />
                <path d="M12 3v18" />
              </svg>
            </div>
            <h2 class="pillar-title">Technical Depth</h2>
          </div>
          <p class="pillar-proof">
            Structural analysis in ETABS &amp; SAFE, LOD 350 Scan-to-BIM for 70,000+ elements at Archnetix, and high-rise RC site QA/QC.
          </p>
          <RouterLink class="pillar-link" to="/work">
            View engineering work <span aria-hidden="true">↗</span>
          </RouterLink>
        </article>

        <!-- Pillar 2: Applied Research -->
        <article class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 class="pillar-title">Applied Research</h2>
          </div>
          <p class="pillar-proof">
            Author of SSRN BIM-to-AR defect tracking research preprint; awarded 3rd Position at the Open House &amp; Job Fair 2026.
          </p>
          <RouterLink class="pillar-link" to="/research">
            View research preprint <span aria-hidden="true">↗</span>
          </RouterLink>
        </article>

        <!-- Pillar 3: Academic Merit -->
        <article class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h2 class="pillar-title">Academic Merit</h2>
          </div>
          <p class="pillar-proof">
            Conferred University Gold Medal; awarded Skill Advancement Grant, Aspire Leaders Program: Designing Concrete Structures Reinforced with GFRP Bars (ACI 440.1R-22).
          </p>
          <RouterLink class="pillar-link" to="/recognition">
            View honours &amp; awards <span aria-hidden="true">↗</span>
          </RouterLink>
        </article>

        <!-- Pillar 4: Global Collaboration -->
        <article class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h2 class="pillar-title">Global Collaboration</h2>
          </div>
          <p class="pillar-proof">
            400 hours over 18 months in U.S. Embassy English Access Program with diverse peers; Aspire Leaders Program alumnus and OMLAS Fellow.
          </p>
          <RouterLink class="pillar-link" to="/community">
            View global programs <span aria-hidden="true">↗</span>
          </RouterLink>
        </article>

        <!-- Pillar 5: Sustainability & SDGs -->
        <article class="pillar-card">
          <div class="pillar-top">
            <div class="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                <path d="M12 22.5c0-4 3-7 3-10.5" />
              </svg>
            </div>
            <h2 class="pillar-title">Sustainability &amp; SDGs</h2>
          </div>
          <p class="pillar-proof">
            World Engineering Day hackathons, World Water Day wastewater design award, EPA SWMM modeling, and academic database serving 200+ juniors.
          </p>
          <RouterLink class="pillar-link" to="/community">
            View community &amp; SDGs <span aria-hidden="true">↗</span>
          </RouterLink>
        </article>
      </div>
    </section>
  </div>

  <!-- Compact Single-Band Contact Section -->
  <section id="contact" class="home-contact-section" aria-labelledby="contact-heading">
    <div class="shell contact-band">
      <div class="contact-band-left">
        <p class="eyebrow contact-eyebrow">Contact</p>
        <h2 id="contact-heading" class="contact-band-title">Get in touch</h2>
        <p class="contact-band-text">
          Open to graduate study, research collaborations, and professional opportunities.
        </p>
      </div>

      <div class="contact-band-actions">
        <div class="contact-email-cluster">
          <a
            :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-btn contact-email-btn"
            aria-label="Compose email to Kashan Shafiq on Gmail (opens in new tab)"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>{{ profile.contact.email }}</span>
            <span class="btn-arrow" aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            class="contact-copy-btn"
            :class="{ copied: copiedEmail }"
            @click="copyEmail(profile.contact.email)"
            :aria-label="copiedEmail ? 'Email copied to clipboard' : 'Copy email address to clipboard'"
          >
            <svg v-if="!copiedEmail" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <svg v-else viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{{ copiedEmail ? 'Copied' : 'Copy' }}</span>
          </button>
        </div>

        <a
          :href="profile.contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-btn"
          aria-label="LinkedIn profile of Kashan Shafiq"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <span>LinkedIn</span>
          <span class="btn-arrow" aria-hidden="true">↗</span>
        </a>

        <div class="contact-location-tag" aria-label="Location: Islamabad / Wah Cantt, Pakistan">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Islamabad / Wah Cantt, PK</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ==========================================================================
   HERO LEFT COPY
   ========================================================================== */
.hero-eyebrow {
  margin-bottom: 18px;
  white-space: nowrap;
}

.hero-headline {
  font-family: var(--sans);
  font-size: clamp(1.05rem, 1.25vw, 1.2rem);
  font-weight: 500;
  color: var(--text);
  line-height: 1.35;
  margin-top: 18px;
  margin-bottom: 12px;
}

.hero-summary {
  font-size: var(--text-hero-intro, 1rem);
  line-height: 1.58;
  color: var(--muted);
  max-width: var(--prose-max-width, 68ch);
  margin: 0;
}

.hero-actions {
  display: flex;
  align-items: center;
  margin-top: 22px;
}

@media (max-width: 480px) {
  .hero-eyebrow {
    white-space: normal;
  }
}

/* ==========================================================================
   CANDIDATE PROFILE SECTION (INTERNATIONAL SCHOLARSHIP PITCH)
   ========================================================================== */
.candidate-profile-section {
  padding-block: 44px 56px;
}

.candidate-eyebrow {
  margin-bottom: 20px;
}

/* Key Metrics Strip */
.profile-metrics-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 2px;
  margin-bottom: 24px;
  overflow: hidden;
}

.metric-cell {
  background: var(--surface);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: background 180ms ease;
}

.metric-cell:hover {
  background: var(--surface-raised);
}

.metric-val {
  font-family: var(--mono);
  font-size: clamp(1.3rem, 1.7vw, 1.65rem);
  font-weight: 600;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.metric-val .accent-mark {
  color: var(--accent);
  font-size: 0.85em;
}

.metric-label {
  font-family: var(--mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-link);
  font-weight: 500;
  margin-top: 2px;
}

.metric-detail {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.35;
  margin-top: 1px;
}

/* 5 Pillars Grid */
.profile-pillars-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.pillar-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 2px;
  padding: 20px 18px 18px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 200ms ease, border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
}

.pillar-card:hover {
  transform: translateY(-2px);
  border-color: var(--line-strong);
  background: var(--surface-raised);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
}

.pillar-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.pillar-icon {
  width: 32px;
  height: 32px;
  border-radius: 2px;
  background: var(--accent-soft);
  border: 1px solid rgba(33, 166, 93, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.pillar-title {
  font-family: var(--sans);
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  line-height: 1.25;
}

.pillar-proof {
  font-size: 0.84rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0 0 16px 0;
  flex-grow: 1;
}

.pillar-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-link);
  text-decoration: none;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 160ms ease;
}

.pillar-link:hover,
.pillar-card:hover .pillar-link {
  color: var(--accent-link-hover);
}

/* ==========================================================================
   CONTACT SECTION (COMPACT SINGLE-BAND)
   ========================================================================== */
.home-contact-section {
  padding-block: 30px 34px;
  border-top: 1px solid var(--line);
  background: var(--bg);
  scroll-margin-top: 40px;
}

.contact-band {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
}

.contact-band-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-eyebrow {
  margin: 0;
  font-size: var(--text-eyebrow);
}

.contact-band-title {
  font-family: var(--sans);
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
  font-weight: 600;
  color: var(--text);
  margin: 0;
  line-height: 1.2;
}

.contact-band-text {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.45;
  margin: 0;
  max-width: 52ch;
}

.contact-band-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  flex-shrink: 0;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--text);
  font-family: var(--mono);
  font-size: 0.8rem;
  text-decoration: none;
  min-height: 40px;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.contact-email-cluster {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.contact-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.775rem;
  min-height: 40px;
  cursor: pointer;
  transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.contact-copy-btn:hover {
  background: var(--surface-raised);
  border-color: var(--line-strong);
  color: var(--text);
  transform: translateY(-1px);
}

.contact-copy-btn:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.contact-copy-btn.copied {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-soft);
}

.contact-copy-btn svg {
  color: currentColor;
  flex-shrink: 0;
}

.contact-btn:hover {
  background: var(--surface-raised);
  border-color: var(--accent);
  color: var(--accent-link);
  transform: translateY(-1px);
}

.contact-btn:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.contact-btn svg {
  color: var(--accent);
  flex-shrink: 0;
}

.btn-arrow {
  color: var(--muted);
  font-size: 0.85em;
  transition: transform 160ms ease, color 160ms ease;
}

.contact-btn:hover .btn-arrow {
  color: var(--accent-link);
  transform: translate(1px, -1px);
}

.contact-location-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.775rem;
  min-height: 40px;
}

.contact-location-tag svg {
  color: var(--accent);
  flex-shrink: 0;
}

/* ==========================================================================
   RESPONSIVE BREAKPOINTS
   ========================================================================== */
@media (max-width: 1280px) {
  .profile-pillars-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .home-contact-section {
    padding-block: 26px 30px;
  }

  .contact-band {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .contact-band-actions {
    width: 100%;
  }

  .contact-email-cluster {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .contact-email-cluster .contact-email-btn {
    flex: 1;
  }

  .contact-copy-btn {
    flex-shrink: 0;
    min-height: 44px;
  }

  .contact-btn,
  .contact-location-tag {
    flex: 1 1 auto;
    min-height: 44px;
  }

  .profile-metrics-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .candidate-profile-section {
    padding-block: 32px 42px;
  }
  .profile-pillars-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .profile-metrics-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 540px) {
  .contact-band-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-btn,
  .contact-location-tag {
    width: 100%;
    justify-content: flex-start;
  }

  .profile-pillars-grid {
    grid-template-columns: 1fr;
  }
  .profile-metrics-strip {
    grid-template-columns: 1fr;
  }
}
</style>
