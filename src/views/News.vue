<template>
  <div>
    <div class="container mx-auto pt-10">
      <h1 class="text-2xl font-bold mb-4">Новости</h1>
      <div class="grid grid-cols-3 gap-4">
        <NewsCard v-for="i in 12" :key="i" list />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NewsCard from '../components/cards/NewsCard.vue'
</script>
