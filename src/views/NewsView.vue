<template>
  <div>
    <div class="container mx-auto pt-10">
      <img
        src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
        alt=""
        class="w-full h-full min-h-[140px] object-cover opacity-80"
      />
      <div class="py-5">
        <div class="flex items-center gap-2 mb-5">
          <span class="bg-blue-500 px-2 py-1 text-white text-xs">News</span>
          <p class="text-sm text-gray-500">12.02.2025</p>
        </div>
        <router-link
          to="/news/1"
          class="text-2xl font-bold mb-4 line-clamp-2 hover:text-[#00B5EE] transition-colors"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </router-link>
        <p class="text-base text-gray-500 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </p>
      </div>
      <a-divider />
      <h2 class="text-2xl font-bold mb-4">Другие новости</h2>
      <div class="grid grid-cols-3 gap-4 pt-3">
        <NewsCard v-for="i in 3" :key="i" list />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NewsCard from '../components/cards/NewsCard.vue'
</script>
