<template>
  <div
    class="card grid mb-3 overflow-hidden rounded-xl bg-white"
    :class="list ? 'grid-cols-[1fr]' : 'grid-cols-[200px_1fr]'"
  >
    <img
      :src="'https://admin.eduai.kz' + news?.image?.url"
      alt=""
      class="w-full h-full min-h-[140px] object-cover"
    />
    <div class="p-3">
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 px-2 py-1 text-white text-xs">
          {{ news?.category?.title_ru || 'Новости' }}
        </span>
        <p class="text-sm text-gray-500">
          {{ new Date(news?.publishedAt).toLocaleDateString('ru-RU') }}
        </p>
      </div>
      <router-link
        :to="`/news/${news?.documentId}`"
        class="text-lg font-bold mb-2 line-clamp-2 hover:text-[#00B5EE] transition-colors"
      >
        {{ news?.title_ru }}
      </router-link>
      <p class="text-sm text-gray-500 line-clamp-2">
        {{ news?.description_ru }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { News } from '../../types/api'
defineProps<{
  mini?: boolean
  list?: boolean
  news: News
}>()
</script>
