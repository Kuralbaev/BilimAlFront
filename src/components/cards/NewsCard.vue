<template>
  <div
    class="card grid mb-3 overflow-hidden rounded-xl bg-white"
    :class="list ? 'grid-cols-[1fr]' : 'grid-cols-[200px_1fr]'"
  >
    <img
      src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
      alt=""
      class="w-full h-full min-h-[140px] object-cover opacity-80"
    />
    <div class="p-3">
      <div class="flex items-center gap-2">
        <span class="bg-blue-500 px-2 py-1 text-white text-xs">News</span>
        <p class="text-sm text-gray-500">12.02.2025</p>
      </div>
      <router-link
        to="/news/1"
        class="text-lg font-bold mb-2 line-clamp-2 hover:text-[#00B5EE] transition-colors"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      </router-link>
      <p class="text-sm text-gray-500 line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  mini?: boolean
  list?: boolean
}>()
</script>
