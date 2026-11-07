<script setup lang="ts">
import { ref } from 'vue'
import BridgeHero from '../components/BridgeHero.vue'
import { profile } from '../content/profile'

const copiedNotice = ref<string | null>(null)
let copyTimer: number | undefined

async function copyValue(val: string, label: string) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(val)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = val
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    copiedNotice.value = `${label} copied to clipboard!`
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      copiedNotice.value = null
    }, 2400)
  } catch (err) {
    console.error('Copy failed:', err)
  }
}
</script>

<template>
  <div class="shell">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow">Civil Engineer</p>
        <h1 id="hero-title" class="hero-name-title" aria-label="Kashan Shafiq">
          <span class="hero-name-first">KASHAN</span>
          <span class="hero-name-last"><span class="hero-name-spacer" aria-hidden="true">KA</span><span class="accent-phrase">SHAFIQ</span></span>
        </h1>
        <p class="hero-headline">Civil engineer bridging structural design, sustainable construction, and <span class="accent-phrase">innovation</span>.</p>
        <p class="hero-summary">
          An engineering professional with strong fundamentals in structural analysis, design, and detailing. My academic and professional experience spans structural design, high-rise construction, and digital construction, including research integrating augmented reality into construction visualization to improve design coordination and reduce rework. My primary interests lie in structural engineering, followed by sustainable construction and the use of digital technologies to improve the built environment. Beyond technical work, my involvement in leadership programmes, extracurricular activities, and academic competitions has strengthened my leadership, teamwork, and problem-solving skills. I am particularly keen to deepen my understanding of structural dynamics, finite element methods, advanced structural materials, and sustainable structural systems.
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
      <span>Structural Engineering</span>
      <span>Sustainable Construction</span>
      <span>Research &amp; Innovation</span>
      <i aria-hidden="true"></i>
    </div>

    <!-- Candidate Profile Key Figures (Dark Cards with Red Top Accent) -->
    <section class="metrics-section" aria-label="Key academic and technical figures">
      <div class="profile-metrics-strip" role="region" aria-label="Key academic and technical figures">
        <div class="metric-cell">
          <span class="metric-val">3.95<span class="accent-mark">/4.00</span></span>
          <span class="metric-label">CGPA · Gold Medalist</span>
          <span class="metric-detail">Top-3 in each semester</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val is-text">
            <span>PROFESSIONAL</span>
            <span class="accent-mark">DEVELOPMENT</span>
          </span>
          <span class="metric-label">PEC-accredited seminars</span>
          <span class="metric-detail">FEM, GIS, FIDIC, NDT</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">70,000<span class="accent-mark">+</span></span>
          <span class="metric-label">BIM Elements</span>
          <span class="metric-detail">LOD 300 · 45-storey tower, Mount Khalid</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">400<span class="accent-mark"> hrs</span></span>
          <span class="metric-label">U.S. Embassy Islamabad</span>
          <span class="metric-detail">18 Months cross-cultural program</span>
        </div>
        <div class="metric-cell">
          <span class="metric-val">200<span class="accent-mark">+</span></span>
          <span class="metric-label">Students Supported</span>
          <span class="metric-detail">Curated academic database</span>
        </div>
      </div>
    </section>
  </div>

  <!-- Candidate Profile Section (Five Compact Pillars - Alternating Light Section) -->
  <section class="candidate-profile-section light-section" aria-label="Candidate profile and qualifications">
    <div class="shell">
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
            RC and seismic design in ETABS and SAFE to ACI 318-14 and ASCE 7. BIM modeling to LOD 300/350, with site layout, quantity takeoff and QC training.
          </p>
        </article>

        <!-- Pillar 2: Research & Innovation -->
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
            <h2 class="pillar-title">Research &amp; Innovation</h2>
          </div>
          <p class="pillar-proof">
            BIM-to-AR framework for construction layout visualization, built with Unity, Vuforia and ARCore. Released as an SSRN research preprint; the FYP placed 3rd at Open House 2026.
          </p>
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
            Gold Medalist, POF merit scholar, and Skill Advancement Grant winner.
          </p>
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
            400-hour U.S. Embassy English Access Program with peers from diverse backgrounds. Aspire Leaders alumnus, OMLAS Fellow, and panelist at Leaders for Global Society 2025.
          </p>
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
            World Engineering Day hackathons (2025, 2026) and World Water Day 2025. Open-access study database for 200+ juniors (SDG 4).
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Compact Single-Band Contact Section (Full-Width Solid Red Closing Band) -->
  <section id="contact" class="home-contact-section red-closing-band" aria-labelledby="contact-heading">
    <div class="shell contact-band">
      <div class="contact-band-left">
        <p class="eyebrow contact-eyebrow">Contact</p>
        <h2 id="contact-heading" class="contact-band-title">Get in touch</h2>
        <p class="contact-band-text">
          Open to graduate study, research collaborations, and professional opportunities.
        </p>
      </div>

      <div class="contact-band-actions">
        <a
          v-if="profile.contact.whatsapp"
          :href="profile.contact.whatsappUrl || 'https://wa.me/923155915676'"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-btn contact-primary-btn"
          @click="copyValue(profile.contact.whatsapp, 'Phone number')"
          aria-label="Contact Kashan Shafiq on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
          <span>Contact</span>
          <span class="btn-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-btn contact-secondary-btn"
          @click="copyValue(profile.contact.email, 'Email address')"
          aria-label="Compose email to Kashan Shafiq on Gmail (opens in new tab, copies email to clipboard)"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>{{ profile.contact.email }}</span>
          <span class="btn-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          :href="profile.contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-btn contact-secondary-btn"
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

    <!-- Floating Copied Feedback Toast -->
    <Transition name="fade-toast">
      <div v-if="copiedNotice" class="contact-copy-toast" role="status" aria-live="polite">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{{ copiedNotice }}</span>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* ==========================================================================
   HERO LEFT COPY
   ========================================================================== */
.hero-name-title {
  width: fit-content;
  margin-inline: auto;
  text-align: left;
}

.hero-name-first,
.hero-name-last {
  display: block;
}

.hero-name-spacer {
  visibility: hidden;
  user-select: none;
  pointer-events: none;
}

.hero-eyebrow {
  margin-bottom: 14px;
  white-space: nowrap;
}

.hero-headline {
  font-family: var(--font-headline);
  font-size: clamp(1.05rem, 1.25vw, 1.18rem);
  font-weight: 750;
  color: var(--text);
  line-height: 1.35;
  letter-spacing: -0.015em;
  margin-top: 14px;
  margin-bottom: 10px;
}

.hero-summary {
  font-size: clamp(0.98rem, 1.05vw, 1.04rem);
  line-height: 1.58;
  color: var(--muted);
  max-width: var(--prose-max-width, 68ch);
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}

.hero-actions {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

@media (min-width: 901px) {
  .hero {
    align-items: stretch;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .hero-actions {
    margin-top: auto;
    padding-block: 8px;
    min-height: 44px;
  }
}

@media (max-width: 480px) {
  .hero-eyebrow {
    white-space: normal;
  }
}

/* ==========================================================================
   KEY FIGURES STRIP (DARK CARDS WITH SIGNATURE RED TOP ACCENT)
   ========================================================================== */
.metrics-section {
  padding-block: 20px 10px;
}

.profile-metrics-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.metric-cell {
  background: var(--surface);
  border: 1px solid var(--line);
  border-top: 2px solid var(--accent);
  border-radius: var(--radius-card);
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: transform 160ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.metric-cell:hover {
  transform: translateY(-2px);
  border-color: var(--line-strong);
  border-top-color: var(--accent);
  box-shadow: var(--shadow-card-dark);
}

.metric-val {
  font-family: var(--font-headline);
  font-size: clamp(1.35rem, 1.8vw, 1.75rem);
  font-weight: 850;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.metric-val.is-text {
  font-size: clamp(0.72rem, 0.92vw, 0.95rem);
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: -0.01em;
  min-height: clamp(1.4rem, 1.85vw, 1.8rem);
  display: flex;
  align-items: center;
  gap: 0.38em;
}

.metric-val.is-text .accent-mark {
  font-size: 1em;
}

.metric-val .accent-mark {
  color: var(--accent);
  font-weight: 850;
}

.metric-label {
  font-family: var(--font-label);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text);
  font-weight: 700;
  margin-top: 2px;
}

.metric-detail {
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.35;
  margin-top: 2px;
}

/* ==========================================================================
   CANDIDATE PROFILE SECTION (FIVE COMPACT PILLARS — ALTERNATING LIGHT SECTION)
   ========================================================================== */
.candidate-profile-section.light-section {
  background: var(--bg-light);
  border-top: 1px solid var(--line-light);
  border-bottom: 1px solid var(--line-light);
  padding-block: 20px 48px;
}

.profile-pillars-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.pillar-card {
  background: #FFFFFF;
  border: 1px solid var(--line-light);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card-light);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.pillar-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  border-color: rgba(216, 21, 27, 0.35);
}

.pillar-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.pillar-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(216, 21, 27, 0.08);
  border: 1px solid rgba(216, 21, 27, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.pillar-title {
  font-family: var(--font-headline);
  font-size: 1.05rem;
  font-weight: 800;
  color: #111111;
  margin: 0;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.pillar-proof {
  font-size: 0.85rem;
  color: #404046;
  line-height: 1.55;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
}

/* ==========================================================================
   CONTACT SECTION (FULL-WIDTH SOLID RED CLOSING BAND)
   ========================================================================== */
.home-contact-section.red-closing-band {
  background: var(--accent);
  padding-block: 38px 42px;
  border: none;
  scroll-margin-top: 40px;
  color: #FFFFFF;
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
  font-family: var(--font-label);
  font-size: var(--text-eyebrow);
  color: #FFFFFF;
  font-weight: 800;
}

.contact-eyebrow::before {
  color: #FFFFFF !important;
}

.contact-band-title {
  font-family: var(--font-headline);
  font-size: clamp(1.4rem, 2vw, 1.85rem);
  font-weight: 900;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.contact-band-text {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.92);
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
  padding: 10px 16px;
  border-radius: var(--radius-btn);
  font-family: var(--font-headline);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  min-height: 44px;
  transition: all 160ms ease;
}

.contact-btn:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}

/* Primary WhatsApp CTA button on Red Band: Solid White */
.contact-primary-btn {
  background: #FFFFFF;
  color: var(--accent);
  border: 1px solid #FFFFFF;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
}

.contact-primary-btn svg {
  color: var(--accent);
  flex-shrink: 0;
}

.contact-primary-btn .btn-arrow {
  color: var(--accent);
  font-size: 0.85em;
  transition: transform 160ms ease;
}

.contact-primary-btn:hover {
  background: #F4F3F2;
  transform: translateY(-2px);
}

.contact-primary-btn:hover .btn-arrow {
  transform: translate(1px, -1px);
}

/* Secondary Buttons on Red Band: Crisp White Outline */
.contact-secondary-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.45);
  color: #FFFFFF;
}

.contact-secondary-btn svg {
  color: #FFFFFF;
  flex-shrink: 0;
}

.contact-secondary-btn .btn-arrow {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85em;
  transition: transform 160ms ease, color 160ms ease;
}

.contact-secondary-btn:hover {
  background: #FFFFFF;
  color: var(--accent);
  border-color: #FFFFFF;
  transform: translateY(-2px);
}

.contact-secondary-btn:hover svg,
.contact-secondary-btn:hover .btn-arrow {
  color: var(--accent);
}

.contact-secondary-btn:hover .btn-arrow {
  transform: translate(1px, -1px);
}

.contact-location-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-btn);
  color: #FFFFFF;
  font-family: var(--font-label);
  font-size: 0.78rem;
  font-weight: 600;
  min-height: 44px;
}

.contact-location-tag svg {
  color: #FFFFFF;
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
    padding-block: 30px 34px;
  }

  .contact-band {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .contact-band-actions {
    width: 100%;
  }

  .contact-btn,
  .contact-location-tag {
    flex: 1 1 auto;
    min-height: 44px;
  }

  .profile-metrics-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .metric-val.is-text {
    font-size: clamp(0.85rem, 1.8vw, 1.05rem);
  }
}

@media (max-width: 768px) {
  .candidate-profile-section {
    padding-block: 20px 36px;
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
