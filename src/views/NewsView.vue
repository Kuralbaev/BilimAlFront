<template>
  <div>
    <div v-if="loading" class="flex justify-center items-center pt-20 w-full">
      <a-spin tip="Загрузка..." />
    </div>
    <template v-else>
      <div class="container mx-auto pt-10">
        <img
          :src="'https://admin.eduai.kz' + currentNews?.image?.url"
          alt=""
          class="w-full h-full min-h-[140px] object-cover"
        />
        <div class="py-5">
          <div class="flex items-center gap-2 mb-5">
            <span class="bg-blue-500 px-2 py-1 text-white text-xs">
              {{ currentNews?.category?.title }}
            </span>
            <p class="text-sm text-gray-500">
              {{
                new Date(currentNews?.publishedAt).toLocaleDateString('ru-RU')
              }}
            </p>
          </div>
          <h2 class="text-2xl font-bold mb-4">
            {{ currentNews?.title }}
          </h2>
          <p class="text-base text-gray-500 line-clamp-2">
            {{ currentNews?.description }}
          </p>
        </div>
        <a-divider />
        <h2 class="text-2xl font-bold mb-4">Другие новости</h2>
        <div class="grid grid-cols-3 gap-4 pt-3">
          <NewsCard
            v-for="item in news.slice(0, 3)"
            :key="item.id"
            :news="item"
            list
          />
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import NewsCard from '../components/cards/NewsCard.vue'
import { useNewsStore } from '../store/NewsStore'

const route = useRoute()
const newsStore = useNewsStore()
const { currentNews, news } = storeToRefs(newsStore)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  if (route.params.id) {
    await newsStore.fetchNewsById(route.params.id)
  }
  loading.value = false
})
</script>
