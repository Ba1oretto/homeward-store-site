<script setup>
import PageLoading from "./components/PageLoading.vue";
import BodyWrap from "./components/BodyWrap.vue";
import PageModal from "./components/PageModal.vue";
import {publishSync} from "pubsub-js";
import {onMounted} from "vue";

onMounted(() => {
  setTimeout(() => {
    publishSync('changeLoadingBgCondition', false)
  }, 200)
})
</script>

<template>
  <div id="_frame">
    <body-wrap/>
    <page-loading/>
    <page-modal/>
  </div>
</template>