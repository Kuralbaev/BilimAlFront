<template>
  <div class="container mx-auto pt-10 p-5 md:p-0">
    <h1 class="text-2xl font-bold mb-4">YouTube</h1>
    <div class="grid md:grid-cols-3 grid-cols-2 gap-4">
      <YouTubeCard v-for="item in youTube" :key="item.id" :news="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import YouTubeCard from '../components/cards/YouTubeCard.vue'
import { useNewsStore } from '../store/NewsStore'

const newsStore = useNewsStore()
const { youTube } = storeToRefs(newsStore)
</script>
