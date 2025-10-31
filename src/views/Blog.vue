<template>
  <div>
    <div class="container mx-auto !pt-10 p-5 md:p-0">
      <h1 class="text-2xl font-bold mb-4">{{ $t('blog') }}</h1>
      <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
        <BlogCard v-for="item in blog" :key="item.id" :news="item" list />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import BlogCard from '../components/cards/BlogCard.vue'
import { useNewsStore } from '../store/NewsStore'

const newsStore = useNewsStore()
const { blog } = storeToRefs(newsStore)
</script>
