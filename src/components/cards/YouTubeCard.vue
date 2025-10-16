<template>
  <div class="card rounded-xl overflow-hidden relative bg-black">
    <img
      src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
      alt="YouTube"
      class="w-full h-full object-cover opacity-80"
    />
    <div class="absolute bottom-0 left-0 right-0 text-white px-4">
      <a
        target="_blank"
        :href="news?.youtube_link"
        class="font-bold mb-4 line-clamp-2 hover:text-[#00B5EE] transition-colors"
      >
        {{ news.title }}
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { News } from '../../types/api'
defineProps<{
  mini?: boolean
  news: News
}>()
</script>
