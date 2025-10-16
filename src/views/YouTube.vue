<template>
  <div class="container mx-auto pt-10">
    <h1 class="text-2xl font-bold mb-4">YouTube</h1>
    <div class="grid grid-cols-3 gap-4">
      <YouTubeCard v-for="i in 12" :key="i" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YouTubeCard from '../components/cards/YouTubeCard.vue'
</script>
