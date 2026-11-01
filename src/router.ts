import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, meta: { title: 'Civil Engineering & Digital Construction' } },
    { path: '/experience', component: () => import('./views/ExperienceView.vue'), meta: { title: 'Work' } },
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
        return `/academic/work-experience/${targetSlug}`
      }
    },
    { path: '/research', component: () => import('./views/ResearchView.vue'), meta: { title: 'Research' } },
    {
      path: '/research/:slug',
      redirect: to => {
        const slugMap: Record<string, string> = {
          'bim-to-ar': 'bim-to-ar-research',
        }
        const targetSlug = slugMap[to.params.slug as string] || to.params.slug
        return `/academic/research-experience/${targetSlug}`
      }
    },
    { path: '/recognition', component: () => import('./views/RecognitionView.vue'), meta: { title: 'Honours and Awards' } },
    { path: '/work', component: () => import('./views/WorkView.vue'), meta: { title: 'Projects' } },
    { path: '/projects/:slug', component: () => import('./views/ProjectView.vue'), meta: { title: 'Project' } },
    { path: '/about', redirect: '/' },
    { path: '/community', component: () => import('./views/CommunityView.vue'), meta: { title: 'Extracurriculars' } },
    { path: '/cv', component: () => import('./views/CvView.vue'), meta: { title: 'Academics' } },
    { path: '/education/:slug', component: () => import('./views/EducationDetailView.vue'), meta: { title: 'Education' } },
    { path: '/academic/skills/:slug(.*)', redirect: '/cv#skills' },
    { path: '/academic/:section/:slug', component: () => import('./views/AcademicDetailView.vue'), meta: { title: 'Academic Archive' } },
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
  document.title = `${String(to.meta.title || 'Portfolio')} — Kashan Shafiq`
})
