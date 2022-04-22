import {defineStore} from "pinia";
import {isBlank} from "../hook/tools.js";
import {publishSync} from "pubsub-js";
import axios from "axios";
import {useCookies} from "vue3-cookies";
import useCart from "./cart.js";

const {cookies} = useCookies();
const useLogin = defineStore('login', {
    state: () => {
        return {
            name: undefined,
            uuid: undefined,
            loggedIn: false
        }
    },
    actions: {
        async login(username) {
            if (isBlank(username)) {
                publishSync('showToast', {condition: false, message: 'Please enter a username to continue', time: 5000})
                publishSync('changeLoadingBgCondition', false)
                return false
            }
            const data = await axios.get(`/mojang/users/profiles/minecraft/${username}`)
            if (data.status !== 200) {
                publishSync('showToast', {condition: false, message: 'Unable to find a player with that username', time: 5000})
                publishSync('changeLoadingBgCondition', false)
                return false
            }
            const player = data.data
            const {data: res} = await axios.get('/homeward/api/player/login', {
                params: {
                    name: player.name,
                    uuid: player.id
                }
            })
            if (!res) {
                publishSync('changeLoadingBgCondition', false)
                return false
            }
            this.name = player.name
            this.uuid = player.id
            this.loggedIn = true
            publishSync('changeModalCondition')
            publishSync('changeLoadingBgCondition', false)
            publishSync('showToast', {condition: true, message: 'logged in', time: 2500})
            useCart().preCartCount()
        },
        async preLogin() {
            const player = cookies.get('homeward-player');
            if (isBlank(player)) {
                publishSync('changeLoadingBgCondition', false)
                return false
            }
            const {data: result} = await axios.get('/homeward/api/player/login/pre')
            if (isBlank(result) || isBlank(result.name) || isBlank(result.uuid)) {
                cookies.remove('homeward-player')
                publishSync('changeLoadingBgCondition', false)
                return false
            }
            this.name = result.name
            this.uuid = result.uuid
            this.loggedIn = true
            publishSync('changeLoadingBgCondition', false)
        }
    }
})

export default useLogin