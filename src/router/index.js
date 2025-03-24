import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    ],
})

export default router
