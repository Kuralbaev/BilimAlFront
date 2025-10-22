<template>
  <swiper
    :slides-per-view="slideCount"
    :space-between="20"
    :loop="true"
    navigation
    :pagination="{ clickable: true }"
    :modules="[Navigation, Pagination]"
  >
    <slot />
  </swiper>
</template>
<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper } from 'swiper/vue'

import { Navigation, Pagination } from 'swiper/modules'

defineProps<{
  slideCount: number
}>()
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  font-size: 20px;
  background-color: #08082c;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 10px;
    height: 10px;
  }
}
</style>
