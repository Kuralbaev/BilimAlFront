<template>
  <template v-if="isMobile()">
    <div class="bg-[#08082c]">
      <div class="container mx-auto flex pr-5 items-center justify-between">
        <img
          @click="$router.push('/')"
          src="../assets/images/logo.jpeg"
          alt="logo"
          class="h-14 cursor-pointer"
        />
        <MenuOutlined
          class="!text-white text-xl cursor-pointer"
          @click="open = true"
        />
      </div>
      <a-drawer v-model:open="open" placement="right">
        <ul class="text-nowrap w-full text-base" @click="open = false">
          <li class="mb-4">
            <router-link to="/" exact class="!text-gray-900">
              Главный
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/news" exact class="!text-gray-900">
              Новости
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/youtube" exact class="!text-gray-900">
              YouTube
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/about" exact class="!text-gray-900">
              О нас
            </router-link>
          </li>
        </ul>
        <a-divider />
        <div class="text-blue-500 flex items-center justify-start gap-3">
          <BaseIcon name="instagram" />
          <BaseIcon name="facebook" />
        </div>
      </a-drawer>
    </div>
  </template>
  <template v-else>
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
</template>

<script setup lang="ts">
import { MenuOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { isMobile } from '../utils'
import BaseIcon from './BaseIcon.vue'
const open = ref(false)
</script>
