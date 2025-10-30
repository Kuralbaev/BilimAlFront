<template>
  <div class="md:p-0 p-4 pt-0">
    <div class="container mx-auto">
      <Slider :slideCount="1" v-if="isMobile()" class="my-5">
        <template v-for="item in news" :key="item.id">
          <SwiperSlide>
            <HeadCard :news="item" />
          </SwiperSlide>
        </template>
      </Slider>
      <div class="header pt-10 grid grid-cols-[3fr_1fr] gap-4" v-else>
        <HeadCard :news="news[0]" />
        <div class="grid grid-cols-1 gap-4">
          <HeadCard
            v-for="item in news.slice(1, 3)"
            mini
            :key="item.id"
            :news="item"
          />
        </div>
      </div>

      <div class="news pt-10 md:pt-20">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">{{ $t('news') }}</h2>
          <div
            class="flex items-center gap-2 cursor-pointer hover:text-[#00B5EE] transition-colors"
            @click="$router.push('/news')"
          >
            {{ $t('viewAll') }}
            <ArrowRightOutlined />
          </div>
        </div>

        <div class="header pt-5 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
          <div>
            <NewsCard
              v-for="item in news.slice(3, 8)"
              :key="item.id"
              :news="item"
            />
          </div>
          <div class="bg-white p-5 rounded-xl h-max">
            <h2 class="text-xl font-bold mb-3">{{ $t('latestNews') }}</h2>
            <div
              class="card mb-6 rounded-xl"
              v-for="item in news.slice(0, 3)"
              :key="item.id"
            >
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="bg-blue-500 px-2 py-1 text-white text-xs">
                    {{
                      item.category[
                        `title_${locale}` as keyof typeof item.category
                      ] || $t('news')
                    }}
                  </span>
                  <p class="text-sm text-gray-500">
                    {{
                      new Date(item?.publishedAt).toLocaleDateString('ru-RU')
                    }}
                  </p>
                </div>
                <router-link
                  :to="`/news/${item.documentId}`"
                  class="text-base font-bold line-clamp-2 hover:text-[#00B5EE] transition-colors"
                >
                  {{ item[`title_${locale}` as keyof News] }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="YouTube pt-20">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">{{ $t('youtube') }}</h2>
          <div
            class="flex items-center gap-2 cursor-pointer hover:text-[#00B5EE] transition-colors"
            @click="$router.push('/youtube')"
          >
            {{ $t('viewAll') }}
            <ArrowRightOutlined />
          </div>
        </div>

        <Slider :slideCount="1" v-if="isMobile()" class="my-5">
          <template v-for="item in youTube" :key="item.id">
            <SwiperSlide>
              <YouTubeCard :news="item" />
            </SwiperSlide>
          </template>
        </Slider>
        <div class="header pt-5 grid grid-cols-3 gap-4" v-else>
          <YouTubeCard
            v-for="item in youTube.slice(0, 3)"
            :key="item.id"
            :news="item"
          />
        </div>
      </div>
    </div>
    <div
      class="feedback md:mt-20 p-5 md:p-20 bg-[#08082c] text-white rounded-xl md:rounded-none"
    >
      <div class="container mx-auto grid md:grid-cols-2 gap-4">
        <div>
          <h2 class="text-2xl md:text-[40px] mb-3">{{ $t('feedback') }}</h2>
          <p class="text-base md:text-lg">
            {{ $t('feedbackDescription') }}
          </p>
        </div>
        <div class="grid">
          <input :placeholder="$t('name')" class="input" v-model="name" />
          <input
            type="tel"
            placeholder="+7 708 239 0623"
            class="input"
            v-model="phone"
          />
          <textarea
            :placeholder="$t('message')"
            class="textarea"
            v-model="messageText"
          />
          <BaseButton
            variant="primary"
            class="w-full cursor-pointer"
            @click="sendFeedback"
          >
            {{ $t('send') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '../components/BaseButton.vue'
import HeadCard from '../components/cards/HeadCard.vue'
import NewsCard from '../components/cards/NewsCard.vue'
import YouTubeCard from '../components/cards/YouTubeCard.vue'
import Slider from '../components/Slider.vue'
import { useNewsStore } from '../store/NewsStore'
import { isMobile } from '../utils'
const newsStore = useNewsStore()

const { news, youTube } = storeToRefs(newsStore)
const { locale } = useI18n()

const name = ref('')
const phone = ref('')
const messageText = ref('')

const sendFeedback = async () => {
  if (!name.value || !phone.value || !messageText.value) {
    message.error(
      locale.value === 'ru'
        ? 'Заполните все поля'
        : 'Барлық өрістерді толтырыңыз'
    )
    return
  }
  if (!phone.value.match(/^\+7\s?\(?\d{3}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/)) {
    message.error(
      locale.value === 'ru'
        ? 'Неверный формат телефона'
        : 'Телефон номері түрі дұрыс емес'
    )
    return
  }
  await axios
    .post(
      `${import.meta.env.VITE_BASE_URL}/feedbacks`,
      {
        data: {
          name: name.value,
          phone: phone.value,
          message: messageText.value,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }
    )
    .then(res => {
      message.success(
        locale.value === 'ru' ? 'Сообщение отправлено' : 'Хабарлама жіберілді'
      )
      name.value = ''
      phone.value = ''
      messageText.value = ''
    })
    .catch(err => {
      message.error(
        locale.value === 'ru'
          ? 'Ошибка при отправке сообщения'
          : 'Хабарлама жіберу кезінде қате'
      )
      console.log(err)
    })
}
</script>
