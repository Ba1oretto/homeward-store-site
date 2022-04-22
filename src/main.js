import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router.js";
import {createPinia} from "pinia";
import useLogin from "./store/login.js";
import {globalCookiesConfig} from "vue3-cookies";
import useCart from "./store/cart.js";

globalCookiesConfig({
    expireTimes: '7d',
    path: '\\',
    domain: 'store.fantang.cc',
    secure: true,
})

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

const loginStore = useLogin();
const cartStore = useCart();

loginStore.preLogin()
cartStore.preCartCount()