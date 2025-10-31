import {
  getBlogByIdFromApi,
  getBlogsFromApi,
  getNewsByIdFromApi,
  getNewsFromApi,
  getTeamByIdFromApi,
  getTeamFromApi,
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
  async function getBlogs() {
    return await getBlogsFromApi()
  }
  async function getTeam() {
    return await getTeamFromApi()
  }

  async function getBlogById(id: string) {
    return await getBlogByIdFromApi(id)
  }
  async function getTeamById(id: string) {
    return await getTeamByIdFromApi(id)
  }

  return {
    getAll,
    getYouTube,
    getNewsById,
    getYouTubeById,
    getBlogs,
    getTeam,
    getBlogById,
    getTeamById,
  }
}
