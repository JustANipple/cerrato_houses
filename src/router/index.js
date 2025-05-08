import Layout from '@/views/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const delay = (t) => new Promise((r) => setTimeout(r, t))

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('@/views/Home.vue'),
                },
            ],
        },
        {
            path: '/faqs',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Faqs',
                    component: () => import('@/views/FaqsView.vue'),
                },
            ],
        },
        {
            path: '/bikes',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Bikes',
                    component: () => import('@/views/BikesView.vue'),
                },
            ],
        },
        {
            path: '/house',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'House',
                    component: () => import('@/views/HouseView.vue'),
                },
            ],
        },
    ],
    async scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            await delay(0)
            return { top: 0, behavior: 'smooth' }
        }
    },
})

export default router
