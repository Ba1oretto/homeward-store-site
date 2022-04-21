<template>
  <div class="category-heading pt-4 text-center">
    <div class="text-5xl text-white font-bold capitalize">Crates</div>
    <div class="input-wrap w-full lg:w-1/2 mx-auto relative mt-6">
      <input v-model="query" ref="inputRef" @focusin="focused = true" @focusout="focused = false" class="w-full bg-gray-900 rounded-md text-white border border-lighten text-lg py-3 px-6 transition-colors duration-200 ease-in-out focus:outline-none focus:border-yellow-400">
      <div v-show="!focused && query.toString().length === 0" class="placeholder pointer-events-none absolute top-0 left-0 text-lg text-gray-700 py-2 leading-loose px-6 transition-opacity duration-200 ease-in-out">Press / to focus</div>
      <label for="searchTerm" class="icon absolute right-0 top-0 m-px p-4 rounded-md pointer-events-none">
        <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
        </svg>
      </label>
    </div>
  </div>
  <transition-group tag="div" class="packages grid gap-6 md:grid-cols-2 pt-16 select-none" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div v-for="(item, index) in computedItemPreview" @click="itemStore.toPackage(item.id)" :key="index" :data-index="index" class="package pb-1.5 relative grid bg-gray-900 border border-lighten transform transition-all hover:opacity-75 hover:-translate-y-2">
      <div class="image relative">
        <div class="bg-block absolute left-0 right-0 bg-gray-800 mx-12 h-24"></div>
        <img :src="item.imageRegular" :alt="item.groupName" class="relative">
      </div>
      <div class="text px-6 text-center grid font-bold">
        <div class="name text-white text-lg">{{ item.groupName }}</div>
        <template v-if="item.discount">
          <div class="price pt-2 text-yellow-400">
            <div class="discounted text-gray-500 text-sm font-italic line-through">${{ item.price / 100 }} USD</div>
            <div class="final">${{ rounding(item.price * item.discountPercent / 10000, 2) }} USD</div>
          </div>
        </template>
        <template v-else>
          <div class="text-gray-500 text-lg">${{ item.price / 100 }} USD</div>
        </template>
        <div class="button pt-10 pb-5 flex text-gray-500 items-center justify-center">
          <span>View Item Details</span>
          <svg class="w-6 h-6 opacity-50 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="quality-bar h-1.5 absolute bottom-0 left-0 right-0"/>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: "ExtraComponent"
}
</script>

<script setup>
import useItem from "../../store/item.js";
import {rounding} from "../../hook/tools.js";
import {computed, shallowRef, onUnmounted, reactive} from "vue";
import gsap from "gsap";

const itemStore = useItem();

const itemPreview = reactive([])
let enable = true
itemStore.selectExtrasList()
itemStore.$subscribe((mutation, state) => {
  if (enable) {
    state.extrasPreview.forEach(v => {
      itemPreview.push(v)
    })
    enable = false
  }
})

const query = shallowRef('')
const inputRef = shallowRef(null)
const focused = shallowRef(false)
const onSlashPressed = (event) => {
  if (event.key === '/') {
    setTimeout(() => {
      inputRef.value.focus()
    }, 30)
  }
}
window.addEventListener("keypress", onSlashPressed)
onUnmounted(() => {
  window.removeEventListener("keypress", onSlashPressed)
})

const computedItemPreview = computed(() => {
  return itemPreview.filter((item) => item.groupName.toLowerCase().includes(query.value))
})
function onBeforeEnter(el) {
  el.style.opacity = 0
}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>