import Home from '@/views/Home.vue'
import Layout from '@/views/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import FaqsView from '@/views/FaqsView.vue'
import BikesView from '@/views/BikesView.vue'
import HouseView from '@/views/HouseView.vue'

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
                    component: HouseView,
                    // component: Home,
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
        {
            path: '/bikes',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Bikes',
                    component: BikesView,
                },
            ],
        },
    ],
})

export default router
