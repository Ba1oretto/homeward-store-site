<template>
  <div class="specials-bar mb-10 -mt-5" :style="{backgroundColor: bgColor}">
    <div class="flex main-text flex-col lg:flex-row text-xl items-center justify-center">
      <div class="text">Spend $20+ USD for 1x Free Spring Crate Key!</div>
    </div>
    <div class="lg:flex items-center justify-center w-full lg:w-auto">
      <div class="amount">
        <div class="progressbar">
          <div class="percent mb-2">Your Cart: {{ currentProgress }}</div>
          <div class="progress">
            <div class="total" :style="{width: currentProgress}"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialBar"
}
</script>

<script setup>
import {shallowRef} from "vue";
import {subscribe} from "pubsub-js";
import {toNumber} from "lodash";

const bgColor = 'rgb(199, 136, 239)'
const currentProgress = shallowRef('0%')
subscribe('setSpendPercent', (_, value) => {
  const currentPercent = (toNumber(value / 20) * 100).toFixed(0)
  currentProgress.value = currentPercent >= 100 ? '100%' : currentPercent + '%'
})
</script>