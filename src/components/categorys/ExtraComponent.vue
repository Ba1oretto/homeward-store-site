<template>
  <div class="packages grid gap-6 md:grid-cols-2 pt-16 select-none">
    <div v-for="(item, index) in itemPreview" @click="itemStore.toPackage(item.id)" :key="index" class="package pb-1.5 relative grid bg-gray-900 border border-lighten transform transition-all hover:opacity-75 hover:-translate-y-2">
      <div class="image relative">
        <div class="bg-block absolute left-0 right-0 bg-gray-800 mx-12 h-24"></div>
        <img :src="item.imageRegular" :alt="item.groupName" class="relative">
      </div>
      <div class="text px-6 text-center grid font-bold">
        <div class="name text-white text-lg">{{ item.name }}</div>
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
    <!--todo search-->
  </div>
</template>

<script>
export default {
  name: "ExtraComponent"
}
</script>

<script setup>
import useItem from "../../store/item.js";
import {rounding} from "../../hook/tools.js";
import {reactive} from "vue";

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
</script>