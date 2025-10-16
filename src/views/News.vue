<template>
  <div>
    <div class="container mx-auto pt-10">
      <h1 class="text-2xl font-bold mb-4">Новости</h1>
      <div class="grid grid-cols-3 gap-4">
        <NewsCard v-for="item in news" :key="item.id" :news="item" list />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import NewsCard from '../components/cards/NewsCard.vue'
import { useNewsStore } from '../store/NewsStore'

const newsStore = useNewsStore()
const { news } = storeToRefs(newsStore)
</script>
