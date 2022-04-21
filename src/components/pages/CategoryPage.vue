<template>
  <div class="page-wrap category-page">
    <div class="container mx-auto">
      <slot name="bread-crumbs"/>
      <slot name="promotions-announcement"/>
      <slot name="special-bar"/>
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
import RankComponent from "../categorys/RankComponent.vue";
import {isBlank} from "../../hook/tools.js";

const category = !isBlank(useRoute().params.id) ? useRoute().params.id.toLowerCase() : ''
const name = useRoute().name

const currentComponent = shallowRef(category.includes('crates') ? CrateComponent : category.includes('extras') ? ExtraComponent : name.includes('rank') ? RankComponent : '')
</script>