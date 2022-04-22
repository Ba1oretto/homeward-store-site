import {defineStore} from "pinia";
import {isBlank} from "../hook/tools.js";
import axios from "axios";
import {useCookies} from "vue3-cookies";
import {publishSync} from "pubsub-js";

const {cookies} = useCookies();

const dataCheck = (packageId) => {
    const player = cookies.get('homeward-player');
    if (isBlank(player)) return false
    const formData = new FormData;
    formData.append('playerId', player)
    if (!isBlank(packageId)) formData.append('packageId', packageId)
    return formData
}

const useCart = defineStore('cart', {
    state: () => {
        return {
            cart: [],
        }
    },
    actions: {
        async packageIncrease(packageId) {
            publishSync('changeLoadingBgCondition', true)
            const formData = dataCheck(packageId);
            if (!formData) return false
            const {data: result} = await axios.put('/homeward/api/cart/increase', formData)
            if (isBlank(result)) return false
            await this.preCartCount()
            publishSync('changeLoadingBgCondition', false)
        },
        async packageDecrease(packageId) {
            publishSync('changeLoadingBgCondition', true)
            const formData = dataCheck(packageId);
            if (!formData) return false
            const {data: result} = await axios.put('/homeward/api/cart/decrease', formData)
            if (isBlank(result)) return false
            await this.preCartCount()
            publishSync('changeLoadingBgCondition', false)
        },
        async packageReset(packageId) {
            publishSync('changeLoadingBgCondition', true)
            const formData = dataCheck(packageId);
            if (!formData) return false
            const {data: result} = await axios.put('/homeward/api/cart/reset/single', formData)
            if (!result) return false
            await this.preCartCount()
            publishSync('changeLoadingBgCondition', false)
        },
        async preCartCount() {
            const player = cookies.get('homeward-player');
            if (isBlank(player)) {
                this.cart = []
                return true
            }
            const formData = new FormData;
            formData.append('playerId', player)
            const {data: result} = await axios.put('/homeward/api/cart/count/pre', formData)
            this.cart = result
            console.log('cart preview: ', result)
        }
    }
})

export default useCart