export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image?: string
  createdAt: string
  updatedAt: string
}

export interface User {
  id: number
  email: string
  name: string
  role: 'admin' | 'user'
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
