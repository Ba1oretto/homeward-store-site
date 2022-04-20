import {createRouter, createWebHistory} from "vue-router";
import {publishSync} from "pubsub-js";

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

router.beforeEach(() => {
    publishSync('changeLoadingBgCondition', true)
    publishSync('changeFooterCondition', false)
})
router.afterEach(() => {
    setTimeout(() => {
        publishSync('changeLoadingBgCondition', false)
        publishSync('changeFooterCondition', true)
    }, 100)
})

export default router