<template>
  <div class="breadcrumbs mb-12 flex items-center capitalize">
    <router-link to="/" class="bg-gray-900 border border-light rounded-md py-3 px-5 text-gray-500 flex items-center transition-colors duration-200 ease-in-out hover:bg-yellow-350 hover:text-yellow-800">
      <svg class="w-5 h-5 mr-3 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>Home</span>
    </router-link>
    <template v-if="name === 'category'">
      <div class="separator">/</div>
      <div class="breadcrumb">{{ param.id }}</div>
    </template>
    <template v-if="name === 'rank'">
      <div class="separator">/</div>
      <div class="breadcrumb">ranks</div>
    </template>
    <template v-if="name === 'package'">
      <div class="separator">/</div>
      <router-link :to="'/category/' + itemPackage.category + 's'" class="breadcrumb">{{ itemPackage.category + 's' }}</router-link>
      <div class="separator">/</div>
      <div class="breadcrumb">{{ itemPackage.name }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs"
}
</script>

<script setup>
import {reactive, shallowRef} from "vue";
import {subscribe} from "pubsub-js";

const props = defineProps(['route'])
const name = shallowRef(props.route.name)
const param = shallowRef(props.route.params)

const itemPackage = reactive({
  name: '',
  category: ''
})
const changeItemPackageInfo = (_, value) => {
  itemPackage.name = value.name
  itemPackage.category = value.category
}
subscribe('changeItemPackageInfo', changeItemPackageInfo)
</script>