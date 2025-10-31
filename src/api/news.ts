import type { ApiResponse, News } from '../types/api'
import axiosInstance from './index'

export async function getNewsFromApi(): Promise<News[]> {
  const { data } = await axiosInstance.get<ApiResponse<News[]>>(
    '/news?populate=*&sort=publishedAt:desc&pagination[pageSize]=10000000000'
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
    '/you-tubes?populate=*&sort=publishedAt:desc&pagination[pageSize]=10000000000'
  )
  return data.data
}

export async function getYouTubeByIdFromApi(id: string): Promise<News> {
  const { data } = await axiosInstance.get<ApiResponse<News>>(
    `/you-tubes/${id}?populate=*`
  )
  return data.data
}

export async function getBlogsFromApi(): Promise<News[]> {
  const { data } = await axiosInstance.get<ApiResponse<News[]>>(
    '/blogs?populate=*&sort=publishedAt:desc&pagination[pageSize]=10000000000'
  )
  return data.data
}

export async function getTeamFromApi(): Promise<News[]> {
  const { data } = await axiosInstance.get<ApiResponse<News[]>>(
    '/teams?populate=*&sort=publishedAt:desc&pagination[pageSize]=10000000000'
  )
  return data.data
}

export async function getBlogByIdFromApi(id: string): Promise<News> {
  const { data } = await axiosInstance.get<ApiResponse<News>>(
    `/blogs/${id}?populate=*`
  )
  return data.data
}

export async function getTeamByIdFromApi(id: string): Promise<News> {
  const { data } = await axiosInstance.get<ApiResponse<News>>(
    `/teams/${id}?populate=*`
  )
  return data.data
}
