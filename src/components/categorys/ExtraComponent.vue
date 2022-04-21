<template>
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
import {computed, shallowRef, watch, reactive} from "vue";
import gsap from "gsap";

const itemStore = useItem();
const props = defineProps(['query']);
const query = shallowRef('')
watch(() => props.query, value => {
  query.value = value
})

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