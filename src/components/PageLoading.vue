<template>
  <div :class="backgroundCondition" class="loading select-none fixed inset-0 z-999 transition-opacity ease-in-out duration-300 flex flex-col items-center justify-center bg-black/80">
    <img src="/src/assets/image/animated-icon.gif" alt="Loading" class="animate-pulse">
    <div class="load-text font-bold uppercase text-4xl mt-3 animate-track">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "PageLoading"
}
</script>

<script setup>
import {shallowRef} from "vue";
import {subscribe} from "pubsub-js";

const backgroundCondition = shallowRef('opacity-100 pointer-events-auto')

const changeCondition = (_, enable) => {
  backgroundCondition.value = enable ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
}
subscribe('changeLoadingBgCondition', changeCondition)
</script>