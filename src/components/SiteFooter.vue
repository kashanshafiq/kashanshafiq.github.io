<template>
  <footer class="site-footer-bar">
    <div class="site-footer shell">
      <div class="footer-brand">
        <RouterLink class="footer-name" to="/">Kashan Shafiq</RouterLink>
        <span class="footer-description">Sustainable Construction</span>
      </div>
      <nav aria-label="Footer navigation">
        <RouterLink to="/experience">Work</RouterLink>
        <RouterLink to="/research">Research</RouterLink>
        <RouterLink to="/recognition">Honours and Awards</RouterLink>
        <RouterLink to="/work">Projects</RouterLink>
        <RouterLink to="/community">Extracurriculars</RouterLink>
        <RouterLink to="/cv">Academics</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer-bar {
  width: 100%;
  background: #000000 !important;
  border-top: 1px solid #1a1a1a !important;
  margin-top: auto;
}

.site-footer {
  border-top: none !important;
  background: transparent !important;
  padding-block: 18px 22px !important;
  font-size: 0.8125rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-name {
  min-height: 28px !important;
  font-size: 0.875rem !important;
  font-family: var(--font-headline);
  font-weight: 800;
  color: #FFFFFF !important;
  letter-spacing: -0.015em;
}

.footer-name:hover {
  color: var(--accent) !important;
}

.footer-description {
  font-size: 0.75rem !important;
  padding-left: 14px !important;
  color: #8E8E93 !important;
  border-left: 1px solid #26262A !important;
}

.site-footer nav {
  gap: 20px !important;
}

.site-footer nav a {
  min-height: 28px !important;
  font-size: 0.8rem !important;
  font-family: var(--font-headline);
  font-weight: 600;
  color: #A8A8AE !important;
  letter-spacing: -0.01em;
  transition: color 160ms ease;
}

.site-footer nav a:hover {
  color: var(--accent) !important;
}

@media (max-width: 900px) {
  .site-footer {
    padding-block: 16px 18px !important;
    gap: 14px !important;
  }
}
</style>
