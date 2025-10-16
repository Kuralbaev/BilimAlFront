import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNewsService } from '../services/newsService'
import type { News } from '../types/api'

export const useNewsStore = defineStore('news', () => {
  const newsService = useNewsService()

  const news = ref<News[]>([])
  const youTube = ref<News[]>([])
  const currentNews = ref<News | null>(null)
  const currentYouTube = ref<News | null>(null)

  async function fetchNews() {
    news.value = await newsService.getAll()
  }
  async function fetchNewsById(id: string) {
    currentNews.value = await newsService.getNewsById(id)
  }

  async function fetchYouTube() {
    youTube.value = await newsService.getYouTube()
  }

  async function fetchYouTubeById(id: string) {
    currentYouTube.value = await newsService.getYouTubeById(id)
  }

  return {
    news,
    currentNews,
    youTube,
    currentYouTube,
    fetchNews,
    fetchYouTube,
    fetchNewsById,
    fetchYouTubeById,
  }
})
