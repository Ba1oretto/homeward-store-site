import {defineStore} from "pinia";
import {isBlank} from "../hook/tools.js";
import axios from "axios";
import {useCookies} from "vue3-cookies";
import {publishSync} from "pubsub-js";

const {cookies} = useCookies();
//把total count做成map
const useCart = defineStore('cart', {
    state: () => {
        return {
            cartTotalCount: 0,
            cartCurrentCount: 0
        }
    },
    actions: {
        async packageIncrease(packageId) {
            publishSync('changeLoadingBgCondition', true)
            const player = cookies.get('homeward-player');
            if (isBlank(player) || isBlank(packageId)) return false
            const formData = new FormData;
            formData.append('playerId', player)
            formData.append('packageId', packageId)
            const {data: result} = await axios.put('/homeward/api/cart/increase', formData)
            if (isBlank(result)) return false
            this.cartCurrentCount = result
            if (this.cartCurrentCount === 1) await this.preCartCount()
            publishSync('changeLoadingBgCondition', false)
            console.log('item count: ', result)
        },
        async packageDecrease(packageId) {
            publishSync('changeLoadingBgCondition', true)
            const player = cookies.get('homeward-player');
            if (isBlank(player) || isBlank(packageId)) return false
            const formData = new FormData;
            formData.append('playerId', player)
            formData.append('packageId', packageId)
            const {data: result} = await axios.put('/homeward/api/cart/decrease', formData)
            if (isBlank(result)) return false
            this.cartCurrentCount = result
            if (this.cartCurrentCount === 0) await this.preCartCount()
            publishSync('changeLoadingBgCondition', false)
            console.log('item count: ', result)
        },
        async packageReset() {
            const player = cookies.get('homeward-player');
        },
        async preCartCount() {
            const player = cookies.get('homeward-player');
            if (isBlank(player)) {
                this.cartTotalCount = 0
                return true
            }
            const formData = new FormData;
            formData.append('playerId', player)
            const {data: result} = await axios.put('/homeward/api/cart/count/pre', formData)
            this.cartTotalCount = result.length
            console.log('cart preview: ', result)
        },
        async prePackageCount(packageId) {
            const player = cookies.get('homeward-player');
            if (isBlank(player)) {
                this.cartCurrentCount = 0
                return true
            }
            if (isBlank(packageId)) return false
            const formData = new FormData;
            formData.append('playerId', player)
            formData.append('packageId', packageId)
            const {data: result} = await axios.put('/homeward/api/cart/count/single', formData)
            if (isBlank(result)) return false
            this.cartCurrentCount = result
            console.log('item current: ', result)
        }
    }
})

export default useCart