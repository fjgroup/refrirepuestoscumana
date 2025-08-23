import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home.vue') },
    { path: '/about', name: 'about', component: () => import('@/pages/About.vue') },
    { path: '/products', name: 'products', component: () => import('@/pages/Products.vue') },
    { path: '/encyclopedia', name: 'encyclopedia', component: () => import('@/pages/Encyclopedia.vue') },
    { path: '/encyclopedia/:slug', name: 'encyclopedia-article', component: () => import('@/pages/EncyclopediaArticle.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/pages/Contact.vue') },
  ],
  scrollBehavior() { return { top: 0 } },
})

export default router
