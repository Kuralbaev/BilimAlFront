<template>
  <div
    class="card bg-black rounded-xl overflow-hidden relative"
    :class="mini ? 'h-full' : 'max-h-[450px] min-h-[400px]'"
  >
    <img
      src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
      alt=""
      class="w-full h-full object-cover opacity-80"
    />
    <div
      class="absolute bottom-0 left-0 right-0 text-white"
      :class="mini ? 'px-4 py-0' : 'px-8 py-4'"
    >
      <p class="text-sm mb-3 leading-none p-1 w-max px-2 bg-blue-500">Home</p>
      <router-link
        to="/news/1"
        class="font-bold mb-4 line-clamp-2 hover:text-[#00B5EE] transition-colors"
        :class="mini ? 'text-base' : 'text-2xl'"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  mini?: boolean
}>()
</script>
