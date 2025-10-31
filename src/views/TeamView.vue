<template>
  <div class="p-5 md:p-0">
    <div v-if="loading" class="flex justify-center items-center pt-20 w-full">
      <a-spin tip="Загрузка..." />
    </div>
    <template v-else>
      <div class="container mx-auto pt-10" v-if="currentTeam">
        <img
          :src="'https://admin.eduai.kz' + currentTeam?.image?.[0]?.url"
          alt=""
          class="w-full h-full min-h-[140px] object-cover rounded-xl"
        />
        <div class="py-5">
          <h2 class="text-2xl font-bold mb-4">
            {{ currentTeam[`title_${locale}` as keyof typeof currentTeam] }}
          </h2>
          <p
            class="text-base text-gray-500"
            v-html="currentTeam[`description_${locale}` as keyof News]"
          />
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useNewsService } from '../services/newsService'
import type { News } from '../types/api'

const { locale } = useI18n()
const route = useRoute()
const newsService = useNewsService()
const loading = ref(false)
const currentTeam = ref<News | null>(null)

onMounted(async () => {
  loading.value = true
  currentTeam.value = await newsService.getTeamById(route.params.id as string)
  loading.value = false
})
</script>
