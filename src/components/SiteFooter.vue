<template>
  <footer class="site-footer shell">
    <div class="footer-brand">
      <RouterLink class="footer-name" to="/">Kashan Shafiq</RouterLink>
      <span class="footer-description">Civil engineering &amp; digital construction</span>
    </div>
    <nav aria-label="Footer navigation">
      <RouterLink to="/experience">Work</RouterLink>
      <RouterLink to="/research">Research</RouterLink>
      <RouterLink to="/recognition">Honours and Awards</RouterLink>
      <RouterLink to="/work">Projects</RouterLink>
      <RouterLink to="/community">Volunteering</RouterLink>
      <RouterLink to="/cv">Academics</RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-block: 16px 18px !important;
  font-size: 0.8125rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-name {
  min-height: 28px !important;
  font-size: 0.8125rem !important;
}

.footer-description {
  font-size: 0.72rem !important;
  padding-left: 14px !important;
}

.site-footer nav {
  gap: 18px !important;
}

.site-footer nav a {
  min-height: 28px !important;
  font-size: 0.775rem !important;
  color: var(--muted) !important;
}

.site-footer nav a:hover {
  color: var(--accent) !important;
}

@media (max-width: 900px) {
  .site-footer {
    padding-block: 14px 16px !important;
    gap: 14px !important;
  }
}
</style>
