<template>
  <div class="page-wrap category-page">
    <div class="container mx-auto">
      <slot name="bread-crumbs"/>
      <slot name="promotions-announcement"/>
      <slot name="special-bar"/>
      <div class="category-heading pt-4 text-center">
        <div class="text-5xl text-white font-bold capitalize">{{ title }}</div>
        <template v-if="category.toLowerCase() === 'crates' || category.toLowerCase() === 'extras'">
          <div class="input-wrap w-full lg:w-1/2 mx-auto relative mt-6">
            <input v-model="query" ref="inputRef" @focusin="focused = true" @focusout="focused = false" class="w-full bg-gray-900 rounded-md text-white border border-lighten text-lg py-3 px-6 transition-colors duration-200 ease-in-out focus:outline-none focus:border-yellow-400">
            <div v-show="!focused && query.toString().length === 0" class="placeholder pointer-events-none absolute top-0 left-0 text-lg text-gray-700 py-2 leading-loose px-6 transition-opacity duration-200 ease-in-out">Press / to focus</div>
            <label for="searchTerm" class="icon absolute right-0 top-0 m-px p-4 rounded-md pointer-events-none">
              <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
              </svg>
            </label>
          </div>
        </template>
      </div>
      <component :is="currentComponent" :query="query"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryPage"
}
</script>

<script setup>
import {useRoute} from "vue-router";
import {shallowRef, onUnmounted} from "vue";
import CrateComponent from "../categorys/CrateComponent.vue";
import ExtraComponent from "../categorys/ExtraComponent.vue";

const category = useRoute().params.id

const title = shallowRef(category)
const currentComponent = shallowRef(category.toLowerCase().includes('crate') ? CrateComponent : ExtraComponent)

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
</script>