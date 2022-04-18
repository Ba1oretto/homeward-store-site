<template>
  <div class="body-wrap grid grid-rows-body h-full">
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
</script>