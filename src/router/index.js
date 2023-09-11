import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),       
    },
    {
        path: '/tips',
        name: 'Tips',
        component: () => import('@/views/Tips.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/landmark',
        name: 'Landmark',
        component: () => import('@/views/Landmarks.vue')
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: () => import('@/views/Schedule.vue')
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
