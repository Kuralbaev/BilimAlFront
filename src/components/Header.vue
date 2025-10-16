<template>
  <div class="bg-[#08082c]">
    <div
      class="container mx-auto grid grid-cols-3 items-center justify-between"
    >
      <img
        @click="$router.push('/')"
        src="../assets/images/logo.jpeg"
        alt="logo"
        class="h-20 cursor-pointer"
      />
      <ul class="flex items-center gap-8 text-nowrap text-white">
        <li>
          <router-link to="/" exact>Главный</router-link>
        </li>
        <li>
          <router-link to="/news" exact>Новости</router-link>
        </li>
        <li>
          <router-link to="/youtube" exact>YouTube</router-link>
        </li>
        <li>
          <router-link to="/about" exact>О нас</router-link>
        </li>
      </ul>
      <div class="flex items-center justify-end gap-4 text-white">
        <BaseIcon name="instagram" />
        <BaseIcon name="facebook" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
</script>
