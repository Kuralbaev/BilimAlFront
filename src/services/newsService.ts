import {
  getNewsByIdFromApi,
  getNewsFromApi,
  getYouTubeByIdFromApi,
  getYouTubeFromApi,
} from '../api/news'

export function useNewsService() {
  async function getAll() {
    return await getNewsFromApi()
  }

  async function getYouTube() {
    return await getYouTubeFromApi()
  }
  async function getNewsById(id: string) {
    return await getNewsByIdFromApi(id)
  }
  async function getYouTubeById(id: string) {
    return await getYouTubeByIdFromApi(id)
  }

  return {
    getAll,
    getYouTube,
    getNewsById,
    getYouTubeById,
  }
}
