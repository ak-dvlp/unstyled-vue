import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'example-page',
      component: () => import('@examples/views/ExamplePage.vue'),
    },
  ],
})

export default router
