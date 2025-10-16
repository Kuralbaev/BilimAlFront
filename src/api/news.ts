import type { ApiResponse, News } from '../types/api'
import axiosInstance from './index'

export async function getNewsFromApi(): Promise<News[]> {
  const { data } = await axiosInstance.get<ApiResponse<News[]>>(
    '/news?populate=*&sort=publishedAt:desc'
  )
  return data.data
}

export async function getNewsByIdFromApi(id: string): Promise<News> {
  const { data } = await axiosInstance.get<ApiResponse<News>>(
    `/news/${id}?populate=*`
  )
  return data.data
}

export async function getYouTubeFromApi(): Promise<News[]> {
  const { data } = await axiosInstance.get<ApiResponse<News[]>>(
    '/you-tubes?populate=*&sort=publishedAt:desc'
  )
  return data.data
}

export async function getYouTubeByIdFromApi(id: string): Promise<News> {
  const { data } = await axiosInstance.get<ApiResponse<News>>(
    `/you-tubes/${id}?populate=*`
  )
  return data.data
}
