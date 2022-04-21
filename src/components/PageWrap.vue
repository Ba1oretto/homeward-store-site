<template>
  <div class="page-wrap">
    <div class="page-bg" :style="{backgroundImage: 'url(' + bgImg + ')'}"/>
    <div class="notification"/>
    <router-view v-slot="{Component, route}">
      <transition name="page" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path">
            <template #bread-crumbs>
              <bread-crumbs :name="route.name" :param="route.params"/>
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
    <wrap-sidebar :player="player"/>
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
import {reactive} from "vue";
import {publishSync} from "pubsub-js";
import useLogin from "../store/login.js";
import BreadCrumbs from "./appearance/BreadCrumbs.vue";

const bgImg = 'https://ghost.ba1oretto.com/content/images/2022/04/Beta_Announcement_Blog.jpg'

const player = reactive({
  name: '',
  uuid: ''
})
const loginStore = useLogin();
loginStore.$subscribe((mutation, state) => {
  player.name = state.name
  player.uuid = state.uuid
  publishSync('userLogin')
})
</script>