<template>
  <div class="page-wrap">
    <div class="page-bg" style="background-image: url(https://ghost.ba1oretto.com/content/images/2022/04/Origin_Realms-1.jpg)"/>
    <div class="notification"/>
    <wrap-toast/>
    <wrap-sidebar/>
  </div>
</template>

<script>
export default {
  name: "PageWrap"
}
</script>

<script setup>

import WrapToast from "./WrapToast.vue";
import WrapSidebar from "./WrapSidebar.vue";
</script>