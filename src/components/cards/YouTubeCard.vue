<template>
  <div class="card rounded-xl overflow-hidden relative bg-black">
    <img
      :src="'https://admin.eduai.kz' + news?.image?.url"
      alt="YouTube"
      class="w-full h-full object-cover"
    />
    <div class="absolute bottom-0 left-0 right-0 text-white px-4">
      <a
        target="_blank"
        :href="news?.youtube_link"
        class="font-bold mb-4 line-clamp-2 hover:text-[#00B5EE] transition-colors"
      >
        {{ news?.title_ru }}
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
