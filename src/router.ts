import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Civil Engineer' } },

    // 1. Work (main & subpages)
    { path: '/work', component: () => import('./views/ExperienceView.vue'), meta: { title: 'Work' } },
    { path: '/work/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Work Experience' } },

    // 2. Research (main & subpages)
    { path: '/research', component: () => import('./views/ResearchView.vue'), meta: { title: 'Research' } },
    { path: '/research/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Research' } },

    // 3. Honours and Awards (main & subpages)
    { path: '/honours-and-awards', component: () => import('./views/RecognitionView.vue'), meta: { title: 'Honours and Awards' } },
    { path: '/honours-and-awards/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Honours and Awards' } },
    { path: '/honors-awards', redirect: '/honours-and-awards' },
    { path: '/honors-awards/:slug', redirect: to => `/honours-and-awards/${to.params.slug}` },
    { path: '/recognition', redirect: '/honours-and-awards' },
    { path: '/recognition/:slug', redirect: to => `/honours-and-awards/${to.params.slug}` },

    // 4. Projects (main & subpages)
    { path: '/projects', component: () => import('./views/WorkView.vue'), meta: { title: 'Projects' } },
    { path: '/projects/:slug', component: () => import('./views/ProjectView.vue'), meta: { title: 'Project' } },

    // 5. Extracurriculars (main & subpages)
    { path: '/extracurriculars', component: () => import('./views/CommunityView.vue'), meta: { title: 'Extracurriculars' } },
    { path: '/extracurriculars/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Extracurriculars' } },
    { path: '/community', redirect: '/extracurriculars' },
    { path: '/community/:slug', redirect: to => `/extracurriculars/${to.params.slug}` },

    // 6. Academics (main & subpages)
    { path: '/academics', component: () => import('./views/CvView.vue'), meta: { title: 'Academics' } },
    { path: '/academics/education/:slug', component: () => import('./views/EducationDetailView.vue'), meta: { title: 'Education' } },
    { path: '/academics/:section/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Academic Archive' } },
    { path: '/cv', redirect: '/academics' },
    { path: '/education/:slug', redirect: to => `/academics/education/${to.params.slug}` },

    // Backwards compatibility redirects for old URLs
    {
      path: '/experience',
      redirect: '/work',
    },
    {
      path: '/experience/:slug',
      redirect: to => {
        const slugMap: Record<string, string> = {
          'archnetix-bim-modeler': 'archnetix-scan-to-bim',
          'mount-khalid-bim-intern': 'mount-khalid-high-rise-bim',
          'simco-trainee-engineer': 'resolve-nstp-tower-intern',
          'simco-site-engineering-intern': 'resolve-nstp-tower-intern',
          'resolve-nstp-trainee-engineer': 'resolve-nstp-tower-intern',
          'resolve-nstp-tower-intern': 'resolve-nstp-tower-intern',
        }
        const targetSlug = slugMap[to.params.slug as string] || to.params.slug
        return `/work/${targetSlug}`
      },
    },
    {
      path: '/academic/work-experience/:slug',
      redirect: to => `/work/${to.params.slug}`,
    },
    {
      path: '/academic/research-experience/:slug',
      redirect: to => {
        const slugMap: Record<string, string> = {
          'bim-to-ar': 'bim-to-ar-research',
        }
        const targetSlug = slugMap[to.params.slug as string] || to.params.slug
        return `/research/${targetSlug}`
      },
    },
    {
      path: '/academic/honors-awards/:slug',
      redirect: to => `/honours-and-awards/${to.params.slug}`,
    },
    {
      path: '/academic/projects/:slug',
      redirect: to => `/projects/${to.params.slug}`,
    },
    {
      path: '/academic/volunteering/:slug',
      redirect: to => `/extracurriculars/${to.params.slug}`,
    },
    {
      path: '/academic/extracurricular/:slug',
      redirect: to => `/extracurriculars/${to.params.slug}`,
    },
    {
      path: '/academic/:section/:slug',
      redirect: to => `/academics/${to.params.section}/${to.params.slug}`,
    },
    { path: '/academic/skills/:slug(.*)', redirect: '/academics#skills' },
    { path: '/about', redirect: '/' },
    { path: '/contact', redirect: '/#contact' },
    { path: '/:pathMatch(.*)*', component: () => import('./views/NotFoundView.vue'), meta: { title: 'Page not found' } },
  ],
  scrollBehavior: (to, _from, saved) => {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.path === '/') {
    document.title = 'Kashan Shafiq | Civil Engineer'
  } else {
    document.title = `${String(to.meta.title || 'Portfolio')} | Kashan Shafiq`
  }
})
