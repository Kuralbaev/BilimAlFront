export interface News {
  id: number
  title: string
  category: {
    title: string
  }
  description?: string
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
