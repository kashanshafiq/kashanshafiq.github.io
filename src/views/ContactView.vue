<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { profile } from '../content/profile'
</script>

<template>
  <div class="shell page-body">
    <PageIntro
      eyebrow="Contact / Start a conversation"
      title="Good ideas begin with a conversation."
      description="For research conversations, engineering opportunities, or a closer look at my work, get in touch."
    />
    <div class="contact-list">
      <a
        v-if="profile.contact.whatsapp"
        :href="profile.contact.whatsappUrl || 'https://wa.me/923155915676'"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="eyebrow">WhatsApp</span>
        <strong>{{ profile.contact.whatsapp }}</strong>
        <span aria-hidden="true">↗</span>
      </a>

      <a
        v-if="profile.contact.email"
        :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="eyebrow">Email</span>
        <strong>{{ profile.contact.email }}</strong>
        <span aria-hidden="true">↗</span>
      </a>

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
