<template>
  <div @click="changeCondition" :class="modalCondition.isActive ? modalCondition.style.active.outer : modalCondition.style.inactive.outer" class="modal fixed bg-black/80 inset-0 grid items-center justify-center transition-opacity duration-300 ease-in-out">
    <div id="modal-body" :class="modalCondition.isActive ? modalCondition.style.active.inner : modalCondition.style.inactive.inner" class="transition-transform duration-200 ease-in-out transform">
      <div class="title flex items-center justify-between mb-6">
        <div class="font-bold text-2xl">{{ component.title }}</div>
        <svg @click="modalCondition.isActive = !modalCondition.isActive" viewBox="0 0 36 36" fill="currentColor" class="w-4 h-4 box-content text-gray-500-400 cursor-pointer p-4 rounded-full bg-gray-800 shadow-lg transition-colors duration-150 ease-in-out hover:text-red-400">
          <path d="M36.0002 5.00012L30.7462 -0.253906L17.8731 12.6191L5.00012 -0.253866L-0.253906 5.00016L12.6191 17.8732L-0.253784 30.7461L5.00024 36.0001L17.8731 23.1272L30.7461 36.0001L36.0001 30.7461L23.1272 17.8732L36.0002 5.00012Z"/>
        </svg>
      </div>
      <div class="body bg-gray-900 p-6 content-wrap">
        <component :is="component.current"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageModal"
}
</script>

<script setup>
import {reactive, shallowRef} from "vue";
import {subscribe} from "pubsub-js";
import HelpDetail from "./dynamic/HelpDetail.vue";
import LoginPanel from "./dynamic/LoginPanel.vue";

const modalCondition = reactive({
  style: {
    active: {
      outer: 'opacity-100 pointer-events-auto',
      inner: ''
    },
    inactive: {
      outer: 'opacity-0 pointer-events-none',
      inner: 'scale-75'
    },
  },
  isActive: false
})
const changeCondition = (event) => {
  if (document.getElementById('modal-body').contains(event.target)) return false
  modalCondition.isActive = !modalCondition.isActive
}

const component = reactive({
  title: 'Please enter your username to continue',
  current: shallowRef(LoginPanel)
})
const showHelpDetail = () => {
  component.title = 'Support & Information'
  component.current = shallowRef(HelpDetail)
  modalCondition.isActive = true
}
const showLoginPanel = () => {
  component.title = 'Please enter your username to continue'
  component.current = shallowRef(LoginPanel)
  modalCondition.isActive = true
}
subscribe('showHelpDetail', showHelpDetail)
subscribe('showLoginPanel', showLoginPanel)
</script>