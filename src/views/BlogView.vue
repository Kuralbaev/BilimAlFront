<template>
  <div class="p-5 md:p-0">
    <div v-if="loading" class="flex justify-center items-center pt-20 w-full">
      <a-spin tip="Загрузка..." />
    </div>
    <template v-else>
      <div class="container mx-auto pt-10" v-if="currentBlog">
        <img
          :src="'https://admin.eduai.kz' + currentBlog?.image?.url"
          alt=""
          class="w-full h-full min-h-[140px] object-cover rounded-xl"
        />
        <div class="py-5">
          <div class="flex items-center gap-2 mb-5">
            <p class="text-sm text-gray-500">
              {{
                new Date(currentBlog?.publishedAt).toLocaleDateString('ru-RU')
              }}
            </p>
            <button
              type="button"
              class="ml-auto shrink-0 relative z-10 pointer-events-auto cursor-pointer px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
              @click="shareNews"
            >
              {{ locale === 'ru' ? 'Поделиться' : 'Бөлісу' }}
            </button>
          </div>
          <h2 class="text-2xl font-bold mb-4">
            {{ currentBlog[`title_${locale}` as keyof typeof currentBlog] }}
          </h2>
          <p
            class="text-base text-gray-500"
            v-html="currentBlog[`description_${locale}` as keyof News]"
          />
        </div>
        <a-divider />
        <h2 class="text-2xl font-bold mb-4">{{ $t('otherBlogs') }}</h2>
        <Slider :slideCount="1" v-if="isMobile()" class="my-5">
          <template v-for="item in blog.slice(0, 3)" :key="item.id">
            <SwiperSlide>
              <BlogCard :news="item" list />
            </SwiperSlide>
          </template>
        </Slider>
        <div class="grid grid-cols-3 gap-4 pt-3" v-else>
          <BlogCard
            v-for="item in blog.slice(0, 3)"
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
import { SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import BlogCard from '../components/cards/BlogCard.vue'
import Slider from '../components/Slider.vue'
import { useNewsService } from '../services/newsService'
import { useNewsStore } from '../store/NewsStore'
import type { News } from '../types/api'
import { isMobile } from '../utils'

const { locale } = useI18n()
const route = useRoute()
const newsStore = useNewsStore()
const newsService = useNewsService()
const { blog } = storeToRefs(newsStore)
const loading = ref(false)
const currentBlog = ref<News | null>(null)

const shareNews = async () => {
  if (!currentBlog.value) return

  const title = String(
    currentBlog.value[
      `title_${locale.value}` as keyof typeof currentBlog.value
    ] ?? ''
  )
  const url = window.location.href
  const shareData: ShareData = { title, text: title, url }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }
  } catch (error) {
    if ((error as DOMException)?.name === 'AbortError') return
  }

  // copy to clipboard
  await window.navigator.clipboard.writeText(url)
  window.alert('Ссылка скопирована')
}

onMounted(async () => {
  loading.value = true
  currentBlog.value = await newsService.getBlogById(route.params.id as string)
  loading.value = false
})
</script>
