<template>
  <div class="bg-[#08082c] mt-30 py-20 pt-14">
    <div
      class="container mx-auto md:grid grid-cols-3 items-center justify-between"
    >
      <img
        @click="$router.push('/')"
        src="../assets/images/logo.jpeg"
        alt="logo"
        class="h-20 cursor-pointer mb-5 md:mb-0 mx-auto md:mx-0"
      />
      <ul
        class="flex w-full justify-center items-center gap-8 text-nowrap text-white"
      >
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
      <div
        class="flex items-center justify-center md:justify-end gap-4 text-white mt-10 md:mt-0"
      >
        <BaseIcon name="instagram" />
        <BaseIcon name="facebook" />
      </div>
    </div>
  </div>

  <div class="container mx-auto py-5 text-center">
    <p>© 2025. Все права защищены.</p>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
</script>
