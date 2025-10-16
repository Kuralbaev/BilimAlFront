import type { ApiResponse, Product } from '../types/api'
import axiosInstance from './index'

export async function getProductsFromApi(): Promise<Product[]> {
  const { data } = await axiosInstance.get<ApiResponse<Product[]>>('/products')
  return data.data
}

export async function getProductById(id: number): Promise<Product> {
  const { data } = await axiosInstance.get<ApiResponse<Product>>(
    `/products/${id}`
  )
  return data.data
}
