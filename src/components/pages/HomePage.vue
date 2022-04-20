<template>
  <div class="page-wrap home-page">
    <div class="container mx-auto">
      <slot name="promotions-announcement"/>
      <slot name="special-bar"/>
      <section class="section-categories mb-6">
        <h2 class="text-3xl font-bold mb-4">Categories</h2>
        <div class="categories">
          <router-link :to="category.path" v-for="category in categories" :class="category.style" class="category">
            <div class="render">
              <div class="layer1"/>
              <div class="layer2"/>
            </div>
            <div class="label capitalize">{{ category.name }}</div>
          </router-link>
        </div>
      </section>
      <section class="section-help mt-16">
        <div class="help-box px-6 lg:px-10 flex items-center flex-col lg:flex-row">
          <div class="orbit"/>
          <div class="text py-6 text-center lg:text-left lg:w-1/2 lg:ml-8">
            <div class="text-xl font-bold pb-2">Need help?</div>
            <div class="text-lg pb-4">Not sure where to start, or need some friendly assistance? Our team is here for you from start to finish!</div>
            <div @click="showHelpDetail" class="button inline-flex items-center font-bold cursor-pointer transition-opacity duration-150 ease-in-out hover:opacity-75 py-2 px-4 rounded-lg border border-lighten">
              <span>Click for more info</span>
              <svg class="w-5 h-5 opacity-50 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<script setup>
import {publishSync} from "pubsub-js";

const categories = [
  {
    name: 'crates',
    style: 'category-crates',
    path: '/category/crates'
  },
  {
    name: 'extras',
    style: 'category-extras',
    path: '/category/extras'
  },
  {
    name: 'ranks',
    style: 'category-ranks',
    path: '/ranks'
  },
]

const showHelpDetail = () => {
  publishSync('showHelpDetail')
}
</script>