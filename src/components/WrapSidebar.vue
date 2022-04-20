<template>
  <div @click="changeCurrencyListCondition" :class="sidebarShown ? 'active' : ''" class="sidebar bg-gray-900 font-bold transition-all duration-500 ease-in-out z-40 outline-none">
    <div :class="sidebarShown ? 'opacity-100' : 'opacity-0'" @click="sidebarShown = false" class="sidebar-close absolute left-0 right-0 lg:right-auto lg:-ml-12 bg-red-600 border border-lighten lg:w-12 h-12 box-content flex items-center justify-center cursor-pointer transition-opacity duration-300 ease-in-out">
      <svg viewBox="0 0 36 36" class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.0002 5.00012L30.7462 -0.253906L17.8731 12.6191L5.00012 -0.253866L-0.253906 5.00016L12.6191 17.8732L-0.253784 30.7461L5.00024 36.0001L17.8731 23.1272L30.7461 36.0001L36.0001 30.7461L23.1272 17.8732L36.0002 5.00012Z"></path>
      </svg>
      <span class="ml-3 lg:hidden">Close Sidebar</span>
    </div>
    <div @click="sidebarShown = true" class="popout">
      <div class="item cursor-pointer bg-yellow-350 border border-lighten lg:w-16 h-16 box-content flex items-center justify-center relative group lg:mb-3 transition-all ease-in-out duration-500" data-item="user">
        <div class="tooltip right-0 mr-20 opacity-0 absolute transition-opacity duration-150 ease-in-out group-hover:opacity-100">{{ username }}</div>
        <img :src="avatarSrc" loading="lazy" :alt="username" class="w-8 h-8 block">
      </div>
      <div class="item cursor-pointer bg-red-600 border border-lighten lg:w-16 h-16 box-content flex items-center justify-center relative group lg:mb-3 transition-all ease-in-out duration-500 delay-100 disabled" data-item="cart">
        <div class="icon">
          <svg viewBox="0 0 36 36" fill="currentColor" class="w-6 h-6 mr-2">
            <path d="M8 8H0V12H4V28H8V32H16V28H24V32H32V28H36V12H32V24H8V8Z"/>
          </svg>
        </div>
        <div class="count">{{ count }}</div>
      </div>
      <div class="item cursor-pointer bg-blue-500 border border-lighten lg:w-16 h-16 box-content flex flex-col items-center justify-center relative group text-white leading-none transition-all ease-in-out duration-500 delay-200" data-item="currency">
        <div class="lg text-2xl mb-1">{{ currencyEnabled.symbol }}</div>
        <div class="sm text-base">{{ currencyEnabled.name }}</div>
      </div>
    </div>
    <div class="main-content pt-12 lg:pt-0">
      <div class="item-user">
        <div class="flex items-center font-bold text-lg bg-gray-800 pt-5 px-6">
          <img :src="bodySrc" :alt="bodyAlt">
          <div class="ml-5">
            <div class="label text-xs uppercase tracking-widest leading-none text-gray-500">{{ loggedIn ? 'shopping as' : 'Guest' }}</div>
            <div class="username">{{ bodyTitle }}</div>
          </div>
        </div>
        <button @click="showLoginPanel" class="bg-gray-750 border border-light text-gray-500 font-bold text-sm flex items-center justify-center py-3 px-5 w-full transition-colors duration-150 ease-in-out hover:bg-yellow-400 hover:text-yellow-800 focus:bg-yellow-300 focus:outline-none focus:text-yellow-800">
          <template v-if="loggedIn">
            <svg class="w-4 h-4 mr-3 opacity-75" viewBox="0 0 512 512" fill="currentColor">
              <path d="M0 168v-16c0-13.255 10.745-24 24-24h381.97l-30.467-27.728c-9.815-9.289-10.03-24.846-.474-34.402l10.84-10.84c9.373-9.373 24.568-9.373 33.941 0l82.817 82.343c12.497 12.497 12.497 32.758 0 45.255l-82.817 82.343c-9.373 9.373-24.569 9.373-33.941 0l-10.84-10.84c-9.556-9.556-9.341-25.114.474-34.402L405.97 192H24c-13.255 0-24-10.745-24-24zm488 152H106.03l30.467-27.728c9.815-9.289 10.03-24.846.474-34.402l-10.84-10.84c-9.373-9.373-24.568-9.373-33.941 0L9.373 329.373c-12.497 12.497-12.497 32.758 0 45.255l82.817 82.343c9.373 9.373 24.569 9.373 33.941 0l10.84-10.84c9.556-9.556 9.341-25.113-.474-34.402L106.03 384H488c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"/>
            </svg>
            <span>Swap Account</span>
          </template>
          <template v-else>
            <svg class="w-4 h-4 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
            </svg>
            <span>Enter Username</span>
          </template>
        </button>
      </div>
      <div class="item-guest py-10">
        <div class="top relative flex items-center justify-between m-6">
          <div class="title text-white font-bold text-2xl">
            Your Cart
            <small class="text-gray-500">({{ count }})</small>
          </div>
          <div class="currency-wrap">
            <button @click.prevent.stop="currencyShown = !currencyShown" class="flex font-bold transition-colors duration-150 ease-in-out items-center rounded bg-gray-800 text-gray-500 shadow-btn-2 py-2 px-4 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none hover:text-yellow-900 focus:text-yellow-900">
              <span class="mr-3 opacity-75">{{ currencyEnabled.symbol }}</span>
              <span class="code">{{ currencyEnabled.name }}</span>
            </button>
            <div :class="currencyShown ? '' : 'opacity-0 pointer-events-none'" class="currencies transition-all ease-in-out duration-200 absolute top-0 left-0 right-0 mt-12 bg-gray-800 shadow-lg rounded grid grid-cols-2 gap-2 p-4 z-50">
              <button v-show="currency.name !== currencyEnabled.name" v-for="(currency, index) in currencyList" :key="index" class="currency font-bold rounded-md flex items-center justify-center bg-light p-3 text-gray-500 transition-opacity duration-150 ease-in-out hover:opacity-50">
                <span class="symbol opacity-75 flex items-center justify-center mr-3 leading-0">{{ currency.name }}</span>
                <span class="code">{{ currency.symbol }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="px-6 py-12 text-gray-500 text-center leading-2">
          <template v-if="loggedIn && count === 0">
            <p>Looks like your cart is empty! Add some items to get started.</p>
          </template>
          <template v-else-if="!loggedIn">
            <p>Looks like you're not signed in yet!</p>
            <p class="text-sm">You'll need to sign in to add items to your cart.</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WrapSidebar"
}
</script>

<script setup>
import {reactive, shallowRef} from "vue";
import {publishSync, subscribe} from "pubsub-js";
import {computed} from "vue";

const props = defineProps(['player'])
const player = props.player

const count = shallowRef(0)

const sidebarShown = shallowRef(false)
const currencyShown = shallowRef(false)
const changeCurrencyListCondition = (event) => {
  const currencyWrap = document.getElementsByClassName('currency-wrap')
  if (!currencyWrap.item(0).contains(event.target)) currencyShown.value = false
}
const closeAll = () => {
  currencyShown.value = sidebarShown.value = false
}
subscribe('changeBarCondition', closeAll)

const avatarSrc = computed(() => loggedIn.value ? `https://minotar.net/helm/${player.uuid}/48` : 'https://minotar.net/avatar/Guest/48')
const username = computed(() => loggedIn.value ? player.name : 'Guest')
const bodyAlt = computed(() => loggedIn.value ? player.name + '\'s Minecraft Skin' : 'Guest Minecraft Skin')
const bodySrc = computed(() => loggedIn.value ? `https://visage.surgeplay.com/bust/64/${player.uuid}` : 'https://visage.surgeplay.com/bust/64/c06f89064c8a49119c29ea1dbd1aab82')
const bodyTitle = computed(() => loggedIn.value ? player.name : 'Login to Purchase')
const loggedIn = shallowRef(false)
subscribe('userLogin', () => {
  loggedIn.value = true
})

const showLoginPanel = () => {
  publishSync('showLoginPanel')
  publishSync('initLoginInput')
  closeAll()
}

const currencyEnabled = reactive({
  name: 'USD',
  symbol: '$'
})
const currencyList = [
  {
    code: "AUD",
    symbol: "A$"
  },
  {
    name: "BRL",
    symbol: "R$"
  },
  {
    name: "CAD",
    symbol: "C$"
  },
  {
    name: "DKK",
    symbol: "Kr."
  },
  {
    name: "EUR",
    symbol: "€"
  },
  {
    name: "NOK",
    symbol: "kr"
  },
  {
    name: "NZD",
    symbol: "$"
  },
  {
    name: "PLN",
    symbol: "zł"
  },
  {
    name: "GBP",
    symbol: "£"
  },
  {
    name: "SEK",
    symbol: "kr"
  },
  {
    name: "USD",
    symbol: "$"
  }
]
</script>