<template>
  <div class="p-5 md:p-0">
    <div v-if="loading" class="flex justify-center items-center pt-20 w-full">
      <a-spin tip="Загрузка..." />
    </div>
    <template v-else>
      <div class="container mx-auto pt-10" v-if="currentNews">
        <img
          :src="'https://admin.eduai.kz' + currentNews?.image?.url"
          alt=""
          class="w-full h-full min-h-[140px] object-cover rounded-xl"
        />
        <div class="py-5">
          <div class="flex items-center gap-2 mb-5">
            <span class="bg-blue-500 px-2 py-1 text-white text-xs">
              {{
                currentNews?.category[
                  `title_${locale}` as keyof typeof currentNews.category
                ]
              }}
            </span>
            <p class="text-sm text-gray-500">
              {{
                new Date(currentNews?.publishedAt).toLocaleDateString('ru-RU')
              }}
            </p>
          </div>
          <h2 class="text-2xl font-bold mb-4">
            {{ currentNews[`title_${locale}` as keyof typeof currentNews] }}
          </h2>
          <p
            class="text-base text-gray-500"
            v-html="currentNews[`description_${locale}` as keyof News]"
          />
        </div>
        <a-divider />
        <h2 class="text-2xl font-bold mb-4">{{ $t('otherNews') }}</h2>
        <Slider :slideCount="1" v-if="isMobile()" class="my-5">
          <template v-for="item in news.slice(0, 3)" :key="item.id">
            <SwiperSlide>
              <NewsCard :news="item" list />
            </SwiperSlide>
          </template>
        </Slider>
        <div class="grid grid-cols-3 gap-4 pt-3" v-else>
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
import { SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import NewsCard from '../components/cards/NewsCard.vue'
import Slider from '../components/Slider.vue'
import { useNewsStore } from '../store/NewsStore'
import { isMobile } from '../utils'
const { locale } = useI18n()
const route = useRoute()
const newsStore = useNewsStore()
const { currentNews, news } = storeToRefs(newsStore)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await newsStore.fetchNewsById(route.params.id)
  loading.value = false
})
</script>
