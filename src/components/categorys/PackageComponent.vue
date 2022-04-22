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
      <cart-manipulation>
        <span>Get {{ name }}!</span>
      </cart-manipulation>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageComponent"
}
</script>

<script setup>
import {computed, reactive, watch} from "vue";
import {rounding} from "../../hook/tools.js";
import useItem from "../../store/item.js";
import {useRoute} from "vue-router";
import {publishSync} from "pubsub-js";
import CartManipulation from "../dynamic/CartManipulation.vue";

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