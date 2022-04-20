<template>
  <div class="body bg-gray-900 grid lg:grid-cols-3 items-center">
    <div class="render bg-yellow-400 p-6 pb-0">
      <img src="../../assets/image/login/user.png" class="max-w-full mx-auto" alt="user">
    </div>
    <div class="form p-10 lg:col-span-2">
      <input v-model="username" class="bg-gray-800 text-white block py-2 px-4 w-full mb-5 border border-light text-center transition-colors duration-150 ease-in-out focus:border-yellow-400 focus:outline-none" autocomplete="off" pattern="^[A-Za-z0-9_]{1,16}$" spellcheck="false" maxlength="16">
      <button @click="submit" class="bg-btn border border-lighten py-2 px-4 shadow-btn uppercase font-extrabold tracking-widest text-btn-text transition-all duration-150 ease-in-out hover:opacity-75 text-center w-full focus:outline-none">Continue to Store</button>
    </div>
    <div class="lg:col-span-3 p-8 bg-gray-800">
      <div class="font-bold text-xl mb-4">What is my Minecraft username?</div>
      <p class="text-gray-500 text-sm mb-3">Your username is the name you appear as on a Minecraft server. If you don’t know what your username is, then please refer to the Minecraft launcher. Towards the top corner it will say your Minecraft name. For example, the bottom of our Minecraft launcher shows “Herobrine”. Remember, usernames cannot contain spaces.</p>
      <img src="../../assets/image/login/example.png" alt="example">
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPanel"
}
</script>

<script setup>
import {shallowRef} from "vue";
import useLogin from "../../store/login.js";
import {publishSync, subscribe} from "pubsub-js";

const loginStore = useLogin();

const username = shallowRef('')
const submit = () => {
  publishSync('changeLoadingBgCondition', true)
  loginStore.login(username.value)
}
subscribe('initLoginInput', () => {
  username.value = ''
})
</script>