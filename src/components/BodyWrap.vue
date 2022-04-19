<template>
  <div @dblclick.stop.prevent @click="changeBarCondition" class="body-wrap grid grid-rows-body h-full">
    <page-header/>
    <page-wrap/>
    <page-footer/>
  </div>
</template>

<script>
export default {
  name: "BodyWrap"
}
</script>

<script setup>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
import PageWrap from "./PageWrap.vue";
import {publishSync} from "pubsub-js";

const sidebarZone = document.getElementsByClassName('sidebar')

const changeBarCondition = (event) => {
  if (!sidebarZone.item(0).contains(event.target)) publishSync('changeBarCondition')
}
</script>