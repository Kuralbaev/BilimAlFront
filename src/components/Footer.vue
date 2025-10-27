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
          <router-link to="/" exact>{{ $t('main') }}</router-link>
        </li>
        <li>
          <router-link to="/news" exact>{{ $t('news') }}</router-link>
        </li>
        <li>
          <router-link to="/youtube" exact>{{ $t('youtube') }}</router-link>
        </li>
        <li>
          <router-link to="/about" exact>{{ $t('about') }}</router-link>
        </li>
      </ul>
      <div
        class="flex items-center justify-center md:justify-end gap-4 text-white mt-10 md:mt-0"
      >
        <a
          href="https://www.instagram.com/bilimai.kz?igsh=aXhwcjcxOXdhM3R1"
          target="_blank"
        >
          <BaseIcon name="instagram" />
        </a>
      </div>
    </div>
  </div>

  <div class="container mx-auto py-5 text-center">
    <p>{{ $t('copyright') }}</p>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
</script>
