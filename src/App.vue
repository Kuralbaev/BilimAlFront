<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { useNewsStore } from './store/NewsStore'

const loading = ref(false)
const newsStore = useNewsStore()

onMounted(() => {
  loading.value = true
  newsStore.fetchNews()
  newsStore.fetchYouTube()
  loading.value = false
})
</script>

<template>
  <div>
    <a-spin v-if="loading" tip="Загрузка..." />
    <template v-else>
      <Header />
      <router-view />
      <Footer />
    </template>
  </div>
</template>

<style scoped></style>
