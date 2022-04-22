<template>
  <transition-group name="cart" tag="div" class="relative p-0">
    <template v-if="loggedIn">
      <template v-if="count === 0">
        <button @click="increase" class="flex justify-center items-center w-full px-6 bg-btn border border-lighten py-4 shadow-btn uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90">
          <svg class="w-8 h-8 mr-2 opacity-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
          <slot/>
        </button>
      </template>
      <template v-else>
        <div class="quantity flex mb-4">
          <button @click="decrease" class="flex p-4 bg-btn border border-lighten uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90 opacity-50 cursor-not-allowed">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
            </svg>
          </button>
          <div class="quantity w-full text-center font-bold text-lg bg-gray-900 flex text-gray-500 items-center justify-center">{{ count }}x Bundle</div>
          <button @click="increase" class="flex p-4 bg-btn border border-lighten uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
            </svg>
          </button>
        </div>
        <div class="flex justify-center items-center w-full bg-gray-900 border border-light py-4 uppercase font-extrabold tracking-wide text-gray-500 transition-all transform duration-150 ease-in-out focus:outline-none cursor-not-allowed">Added to cart</div>
        <button @click="reset" class="remove text-red-400 transition-colours ease-in-out duration-150 hover:text-red-200 p-5 font-bold text-sm text-center block w-full focus:outline-none">Remove from cart</button>
      </template>
    </template>
    <template v-else>
      <div class="bg-gray-900 border border-lighten py-4 px-5 text-center mt-4 text-gray-500 font-bold">
        <svg class="w-12 h-12 opacity-50 mx-auto mb-2" viewBox="0 0 640 512" fill="currentColor">
          <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/>
        </svg>
        <div class="lg text-lg leading-tight pb-3">Enter username to purchase</div>
        <div class="sm opacity-75">You need to enter your Minecraft username before you can purchase this item!</div>
      </div>
      <button @click="login" class="flex justify-center w-full text-gray-500 items-center bg-btn text-btn-text border border-lighten py-4 uppercase font-extrabold tracking-wide transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none">
        <svg class="w-6 h-6 opacity-75 mr-2" viewBox="0 0 640 512" fill="currentColor">
          <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/>
        </svg>
        <span>Enter Username</span>
      </button>
    </template>
  </transition-group>
</template>

<script>
export default {
  name: "CartManipulation"
}
</script>

<script setup>
import {shallowRef} from "vue";
import useCart from "../../store/cart.js";
import {useRoute} from "vue-router";
import useLogin from "../../store/login.js";
import {publishSync} from "pubsub-js";

const route = useRoute()
const cartStore = useCart();
const loginStore = useLogin();

const packageId = route.params.id

const loggedIn = shallowRef(loginStore.loggedIn)
loginStore.$subscribe((mutation, state) => {
  loggedIn.value = state.loggedIn
})
const login = () => {
  publishSync('showLoginPanel')
}

const count = shallowRef(0)
const getCartFirst = () => {
  cartStore.cart.forEach(v => {
    if (v.id === packageId) {
      count.value = v.inCart
    }
  })
}
getCartFirst()
let isDefined = false
cartStore.$subscribe((mutation, state) => {
  isDefined = false
  state.cart.forEach(v => {
    if (v.id === packageId) {
      count.value = v.inCart
      isDefined = true
    }
  })
  if (!isDefined) count.value = 0
})

const increase = () => {
 cartStore.packageIncrease(packageId)
}
const decrease = () => {
 cartStore.packageDecrease(packageId)
}
const reset = () => {
 cartStore.packageReset(packageId)
}
</script>