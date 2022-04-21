<template>
  <transition-group tag="div" class="crates pt-16" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <div class="mb-12 crate-row" v-for="(item, index) in computedItemPreview" :key="index" :data-index="index">
      <div class="main bg-gray-900 border border-light grid lg:grid-cols-4">
        <div class="image group">
          <div :style="{backgroundImage: 'url(' + item.imageRegular + ')'}" class="regular transition-opacity duration-300 ease-in-out group-hover:opacity-0"/>
          <div :style="{backgroundImage: 'url(' + item.imageHover + ')'}" class="hover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"/>
        </div>
        <div class="text p-10 lg:col-span-3">
          <div class="title text-center lg:text-left font-bold text-3xl mb-6">{{ item.groupName }}</div>
          <div class="relative">
            <div class="amounts grid lg:grid-cols-4 select-none">
              <div v-for="single in item.itemsList" :key="single.id" @click="itemStore.toPackage(single.id)" class="amount block text-center py-5 font-bold cursor-pointer bg-gray-800 border border-light border-r-0 last:border-r group transition-all duration-150 ease-in-out transform hover:text-yellow-800 hover:bg-yellow-400 hover:-translate-y-2">
                <div class="amount text-2xl pb-1">{{ single.amount }}x</div>
                <template v-if="single.discount">
                  <div class="price opacity-25 text-sm line-through">${{ single.price / 100 }} USD</div>
                  <div class="price opacity-50">${{ rounding(single.price * single.discountPercent / 10000, 2) }} USD</div>
                </template>
                <template v-else>
                  <div class="price opacity-50 text-lg">${{ single.price / 100  }} USD</div>
                </template>
                <div class="buy-label flex items-center justify-center transition-colors duration-150 ease-in-out text-yellow-400 pt-3 group-hover:text-yellow-800">
                  <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  name: "CrateComponent"
}
</script>

<script setup>
import gsap from 'gsap'
import useItem from "../../store/item.js";
import {reactive, shallowRef, watch, computed} from "vue";
import {rounding} from "../../hook/tools.js";
import {useRouter} from "vue-router";

const router = useRouter();
const itemStore = useItem();
const props = defineProps(['query']);
const query = shallowRef('')
watch(() => props.query, value => {
  query.value = value
})

const itemPreview = reactive([])
let enable = true
itemStore.selectCratesList()
itemStore.$subscribe((mutation, state) => {
  if (enable) {
    state.cratesPreview.forEach(v => {
      itemPreview.push(v)
    })
    enable = false
    console.log(itemPreview)
  }
})

const computedItemPreview = computed(() => {
  return itemPreview.filter((item) => item.groupName.toLowerCase().includes(query.value))
})
function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}
function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '18rem',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>