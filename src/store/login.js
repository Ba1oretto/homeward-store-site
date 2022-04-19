import {defineStore} from "pinia";
import {isBlank} from "../hook/tools.js";
import {publishSync} from "pubsub-js";
import axios from "axios";

const useLogin = defineStore('login', {
    state: () => {
        return {
            name: undefined,
            uuid: undefined
        }
    },
    actions: {
        async login(username) {
            if (isBlank(username)) {
                publishSync('showToast', {condition: false, message: 'Please enter a username to continue', time: 5000})
                return false
            }
            const data = await axios.get(`/mojang/users/profiles/minecraft/${username}`)
            if (data.status !== 200) {
                publishSync('showToast', {condition: false, message: 'Unable to find a player with that username', time: 5000})
                return false
            }
            const player = data.data
            this.name = player.name
            this.uuid = player.id
        }
    }
})

export default useLogin