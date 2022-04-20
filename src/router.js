import {createRouter, createWebHistory} from "vue-router";

const home = () => import('./components/pages/HomePage.vue')
const categories = () => import('./components/pages/CategoryPage.vue')

const routes = [
    {
        name: 'home',
        path: '/',
        component: home
    },
    {
        name: 'category',
        path: '/category/:id',
        component: categories
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