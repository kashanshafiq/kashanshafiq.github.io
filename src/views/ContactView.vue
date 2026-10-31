<script setup lang="ts">
import { ref } from 'vue'
import PageIntro from '../components/PageIntro.vue'
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
  <div class="shell page-body">
    <PageIntro
      eyebrow="Contact / Start a conversation"
      title="Good ideas begin with a conversation."
      description="For research conversations, engineering opportunities, or a closer look at my work, get in touch."
    />
    <div class="contact-list">
      <div v-if="profile.contact.email" class="contact-email-row">
        <a
          :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="eyebrow">Email</span>
          <strong>{{ profile.contact.email }}</strong>
          <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          class="contact-copy-btn"
          :class="{ copied: copiedEmail }"
          @click="copyEmail(profile.contact.email)"
          :aria-label="copiedEmail ? 'Email copied to clipboard' : 'Copy email address to clipboard'"
        >
          <svg v-if="!copiedEmail" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <svg v-else viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{{ copiedEmail ? 'Copied' : 'Copy' }}</span>
        </button>
      </div>

      <a
        v-if="profile.contact.linkedin"
        :href="profile.contact.linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="eyebrow">LinkedIn</span>
        <strong>Kashan Shafiq</strong>
        <span aria-hidden="true">↗</span>
      </a>

      <a
        v-if="profile.contact.github"
        :href="profile.contact.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="eyebrow">GitHub</span>
        <strong>Code &amp; projects</strong>
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <RouterLink class="text-link" to="/cv">
      View academic CV <span aria-hidden="true">↗</span>
    </RouterLink>
  </div>
</template>

<style scoped>
.contact-email-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-email-row a {
  flex: 1;
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
  cursor: pointer;
  transition: all 150ms ease;
}

.contact-copy-btn:hover {
  background: var(--surface-raised);
  border-color: var(--line-strong);
  color: var(--text);
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
</style>
