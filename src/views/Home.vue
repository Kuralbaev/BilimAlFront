<template>
  <div class="">
    <div class="container mx-auto">
      <div class="header pt-10 grid grid-cols-[3fr_1fr] gap-4">
        <HeadCard />
        <div class="grid grid-cols-1 gap-4">
          <HeadCard v-for="i in 2" mini :key="i" />
        </div>
      </div>

      <div class="news pt-20">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">Новости</h2>
          <div class="flex items-center gap-2">
            Посмотреть все
            <ArrowRightOutlined />
          </div>
        </div>

        <div class="header pt-5 grid grid-cols-[3fr_1fr] gap-4">
          <div>
            <NewsCard v-for="i in 3" :key="i" />
          </div>
          <div class="bg-white p-5 rounded-xl h-max">
            <h2 class="text-xl font-bold mb-3">Последние новости</h2>
            <div class="card mb-6 rounded-xl" v-for="i in 3" :key="i">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="bg-blue-500 px-2 py-1 text-white text-xs">
                    News
                  </span>
                  <p class="text-sm text-gray-500">12.02.2025</p>
                </div>
                <router-link
                  to="/news/1"
                  class="text-base font-bold line-clamp-2 hover:text-[#00B5EE] transition-colors"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam,
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="YouTube pt-20">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold">YouTube</h2>
          <div class="flex items-center gap-2">
            Посмотреть все
            <ArrowRightOutlined />
          </div>
        </div>

        <div class="header pt-5 grid grid-cols-3 gap-4">
          <YouTubeCard v-for="i in 3" :key="i" />
        </div>
      </div>
    </div>
    <div class="feedback mt-20 p-20 bg-[#08082c] text-white">
      <div class="container mx-auto grid grid-cols-2 gap-4">
        <div>
          <h2 class="text-[40px] mb-3">Обратная связь</h2>
          <p class="text-lg">
            Если у вас есть вопросы, предложения или вы хотите связаться с нами,
            пожалуйста, заполните форму. Мы постараемся ответить вам в
            кратчайшие сроки.
          </p>
        </div>
        <div class="grid">
          <input placeholder="Имя" class="input" />
          <input placeholder="Телефон" class="input" />
          <textarea placeholder="Сообщение" class="textarea" />
          <BaseButton variant="primary" class="w-full cursor-pointer">
            Отправить
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightOutlined } from '@ant-design/icons-vue'
import BaseButton from '../components/BaseButton.vue'
import HeadCard from '../components/cards/HeadCard.vue'
import NewsCard from '../components/cards/NewsCard.vue'
import YouTubeCard from '../components/cards/YouTubeCard.vue'
</script>
