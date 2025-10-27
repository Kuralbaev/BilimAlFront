<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { useNewsStore } from './store/NewsStore'
import { useAuthStore } from './store/authStore'

const loading = ref(false)
const newsStore = useNewsStore()
const store = useAuthStore()
const { currentLocale } = storeToRefs(store)
const { locale } = useI18n()

onMounted(() => {
  loading.value = true
  newsStore.fetchNews()
  newsStore.fetchYouTube()
  loading.value = false
  locale.value = currentLocale.value
})
</script>

<template>
  <div>
    <a-spin v-if="loading" tip="Загрузка..." />
    <template v-else>
      <Header />
      <div class="min-h-[calc(100vh-480px)]">
        <router-view />
      </div>
      <Footer />
    </template>
  </div>
</template>

<style scoped></style>
