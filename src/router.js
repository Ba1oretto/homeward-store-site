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
        path: '/ranks',
        component: categories
    },
    {
        name: 'package',
        path: '/package/:id',
        component: categories
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach(() => {
//     publishSync('changeLoadingBgCondition', true)
//     publishSync('changeFooterCondition', false)
//     window.scroll({top: 0, behavior: "smooth"})
// })

export default router