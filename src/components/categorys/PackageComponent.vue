<template>
  <div class="grid lg:grid-cols-3 gap-12">
    <div class="info lg:col-span-2">
      <h3 class="package-title font-bold text-5xl text-white mb-4">{{ name }}</h3>
      <div class="price font-extrabold mb-6">
        <template v-if="itemPackage.discount">
          <div class="discount line-through italic text-gray-700">${{ price }} USD</div>
          <div class="final text-2xl text-yellow-400">${{ discount }} USD</div>
        </template>
        <template v-else>
          <div class="discount text-3xl text-yellow-400">${{ price }} USD</div>
        </template>
        <div class="description content-wrap" v-html="itemPackage.description"/>
      </div>
    </div>

    <div class="info">
      <div class="image bg-gray-800 border border-light px-4 py-10 mb-6">
        <img :src="itemPackage.imageRegular" draggable="false" :alt="name" class="max-w-full mx-auto">
      </div>
      <template v-if="count === 0">
        <button class="flex justify-center items-center w-full px-6 bg-btn border border-lighten py-4 shadow-btn uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90">
          <svg class="w-8 h-8 mr-2 opacity-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>
          <span>Get {{ name }}!</span>
        </button>
      </template>
      <template v-else>
        <div class="quantity flex mb-4">
          <button class="flex p-4 bg-btn border border-lighten uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90 opacity-50 cursor-not-allowed">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/>
            </svg>
          </button>
          <div class="quantity w-full text-center font-bold text-lg bg-gray-900 flex text-gray-500 items-center justify-center">{{ count }}x Bundle</div>
          <button class="flex p-4 bg-btn border border-lighten uppercase font-extrabold tracking-wide text-btn-text transition-all transform duration-150 ease-in-out hover:opacity-75 focus:outline-none focus:scale-90">
            <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/>
            </svg>
          </button>
        </div>
        <div class="flex justify-center items-center w-full bg-gray-900 border border-light py-4 uppercase font-extrabold tracking-wide text-gray-500 transition-all transform duration-150 ease-in-out focus:outline-none cursor-not-allowed">Added to cart</div>
        <button class="remove text-red-400 transition-colours ease-in-out duration-150 hover:text-red-200 p-5 font-bold text-sm text-center block w-full focus:outline-none">Remove from cart</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageComponent"
}
</script>

<script setup>
import {computed, reactive, shallowRef, watch} from "vue";
import {rounding} from "../../hook/tools.js";
import useItem from "../../store/item.js";
import {useRoute} from "vue-router";
import {publishSync} from "pubsub-js";

const route = useRoute();
const itemStore = useItem();

const itemPackage = reactive({
  id: '',
  amount: '',
  name: '',
  category: '',
  price: '',
  discount: '',
  discountPercent: '',
  imageRegular: '',
  description: ''
})
let enable = true
itemStore.selectPackage(route.params.id)
itemStore.$subscribe((mutation, state) => {
  if (enable) {
    itemPackage.id = state.itemPackage.id
    itemPackage.amount = state.itemPackage.amount
    itemPackage.name = state.itemPackage.name
    itemPackage.category = state.itemPackage.category
    itemPackage.price = state.itemPackage.price
    itemPackage.discount = state.itemPackage.discount
    itemPackage.discountPercent = state.itemPackage.discountPercent
    itemPackage.imageRegular = state.itemPackage.imageRegular
    itemPackage.description = state.itemPackage.description
    enable = false
  }
})
const count = shallowRef(0)

const name = computed(() => itemPackage.category === 'extra' ? itemPackage.name : itemPackage.amount.toString().concat('x ', itemPackage.name))
const price = computed(() => itemPackage.price /100)
const discount = computed(() => rounding(itemPackage.price * itemPackage.discountPercent / 10000, 2))

watch(() => itemPackage, () => {
  publishSync('changeItemPackageInfo', {
    name: itemPackage.amount.concat('x ', itemPackage.name),
    category: itemPackage.category
  })
}, {deep: true})
</script>