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

        <div class="flex items-center gap-4">
          <a-dropdown trigger="click">
            <p
              class="cursor-pointer flex items-center gap-2 border border-white rounded-full px-3 py-1 text-white text-sm"
            >
              {{ locale === 'ru' ? 'Рус' : 'Қаз' }}
              <DownOutlined />
            </p>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <p @click="((locale = 'ru'), (currentLocale = 'ru'))">Рус</p>
                </a-menu-item>
                <a-menu-item>
                  <p @click="((locale = 'kk'), (currentLocale = 'kk'))">Қаз</p>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <MenuOutlined
            class="!text-white text-xl cursor-pointer"
            @click="open = true"
          />
        </div>
      </div>
      <a-drawer v-model:open="open" placement="right">
        <ul class="text-nowrap w-full text-base" @click="open = false">
          <li class="mb-4">
            <router-link to="/" exact class="!text-gray-900">
              {{ $t('main') }}
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/news" exact class="!text-gray-900">
              {{ $t('news') }}
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/blog" exact class="!text-gray-900">
              {{ $t('blog') }}
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/team" exact class="!text-gray-900">
              {{ $t('team') }}
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/youtube" exact class="!text-gray-900">
              {{ $t('youtube') }}
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/about" exact class="!text-gray-900">
              {{ $t('about') }}
            </router-link>
          </li>
        </ul>
        <a-divider />
        <div class="text-blue-500 flex items-center justify-start gap-3">
          <a
            href="https://www.instagram.com/bilimai.kz?igsh=aXhwcjcxOXdhM3R1"
            target="_blank"
          >
            <BaseIcon name="instagram" />
          </a>
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
            <router-link to="/" exact>{{ $t('main') }}</router-link>
          </li>
          <li>
            <router-link to="/news" exact>{{ $t('news') }}</router-link>
          </li>
          <li>
            <router-link to="/blog" exact>
              {{ $t('blog') }}
            </router-link>
          </li>
          <li>
            <router-link to="/team" exact>
              {{ $t('team') }}
            </router-link>
          </li>
          <li>
            <router-link to="/youtube" exact>{{ $t('youtube') }}</router-link>
          </li>
          <li>
            <router-link to="/about" exact>{{ $t('about') }}</router-link>
          </li>
        </ul>
        <div class="flex items-center justify-end gap-4 text-white">
          <a-dropdown trigger="click">
            <p
              class="cursor-pointer flex items-center gap-2 border border-white rounded-full px-3 py-1"
            >
              {{ locale === 'ru' ? 'Рус' : 'Қаз' }}
              <DownOutlined />
            </p>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <p @click="((locale = 'ru'), (currentLocale = 'ru'))">Рус</p>
                </a-menu-item>
                <a-menu-item>
                  <p @click="((locale = 'kk'), (currentLocale = 'kk'))">Қаз</p>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a
            href="https://www.instagram.com/bilimai.kz?igsh=aXhwcjcxOXdhM3R1"
            target="_blank"
          >
            <BaseIcon name="instagram" />
          </a>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { DownOutlined, MenuOutlined } from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '../store/authStore'
import { isMobile } from '../utils'
import BaseIcon from './BaseIcon.vue'

const { locale } = useI18n()
const store = useAuthStore()
const { currentLocale } = storeToRefs(store)

const open = ref(false)
</script>
