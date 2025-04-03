import Home from '@/views/Home.vue'
import Layout from '@/views/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import FaqsView from '@/views/FaqsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home,
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
                    component: FaqsView,
                },
            ],
        },
    ],
})

export default router
