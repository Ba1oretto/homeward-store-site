<template>
  <div class="page-wrap">
    <div class="page-bg" :style="{backgroundImage: 'url(' + bgImg + ')'}"/>
    <div class="notification"/>
    <router-view v-slot="{Component, route}">
      <transition name="page" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path">
            <template #bread-crumbs>
              <bread-crumbs :route="route"/>
            </template>
            <template #promotions-announcement>
              <promotions-announcement/>
            </template>
            <template #special-bar>
              <special-bar/>
            </template>
          </component>
        </keep-alive>
      </transition>
    </router-view>
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
import PromotionsAnnouncement from "./appearance/PromotionsAnnouncement.vue";
import SpecialBar from "./appearance/SpecialBar.vue";
import BreadCrumbs from "./appearance/BreadCrumbs.vue";

const bgImg = 'https://ghost.ba1oretto.com/content/images/2022/04/Beta_Announcement_Blog.jpg'
</script>