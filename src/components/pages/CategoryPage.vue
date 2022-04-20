<template>
  <div class="page-wrap category-page">
    <div class="container mx-auto">
      <slot name="bread-crumbs"/>
      <slot name="promotions-announcement"/>
      <slot name="special-bar"/>
      <div class="category-heading pt-4 text-center">
        <div class="text-5xl text-white font-bold capitalize">{{ title }}</div>
      </div>
      <component :is="currentComponent"/>
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
import {shallowRef} from "vue";
import CrateComponent from "../categorys/CrateComponent.vue";
import ExtraComponent from "../categorys/ExtraComponent.vue";

const category = useRoute().params.id

const title = shallowRef(category)
const currentComponent = shallowRef(category.toLowerCase().includes('crate') ? CrateComponent : ExtraComponent)
</script>