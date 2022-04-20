<template>
  <div class="toasts fixed left-0 bottom-0 z-999 leading-loose grid gap-5 m-6">
    <transition name="slide" mode="out-in">
      <div v-show="toast.isActive" class="toast-wrap">
        <div :class="toast.condition ? 'bg-green-700' : 'bg-red-600'" class="toast inline-flex text-white font-bold border border-lighten rounded-lg text-black py-3 px-6 shadow-xl text-shadow">
          {{ toast.message }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WrapToast"
}
</script>

<script setup>
import {reactive} from "vue";
import {subscribe} from "pubsub-js";

const toast = reactive({
  isActive: false,
  condition: undefined,
  message: ''
})

const showToast = async (_, data) => {
  const {condition, message, time} = data
  toast.isActive = true
  toast.condition = condition
  toast.message = message
  setTimeout(() => {
    toast.isActive = false
    setTimeout(() => {
      toast.message = ''
      toast.condition = undefined
    }, 500)
  }, time ? time : 2500)
}
subscribe('showToast', showToast)
</script>