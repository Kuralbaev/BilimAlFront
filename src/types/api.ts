export interface News {
  id: number
  title_ru: string
  title_kk: string
  category: {
    title_ru: string
    title_kk: string
  }
  description_ru?: string
  description_kk?: string
  image?: any
  count: string
  documentId?: string
  youtube_link?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
