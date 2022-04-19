import {createRouter, createWebHistory} from "vue-router";

const home = () => import('./components/pages/HomePage.vue')

const routes = [
    {
        name: 'home',
        path: '/',
        component: home
    },
    {
        name: 'category',
        path: '/category/:id'
    },
    {
        name: 'rank',
        path: '/ranks'
    },
    {
        name: 'package',
        path: '/package/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router