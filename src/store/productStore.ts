import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProductService } from '../services/productService'
import type { Product } from '../types/api'

export const useProductStore = defineStore('product', () => {
  const productService = useProductService()

  const products = ref<Product[]>([])

  async function fetchProducts() {
    products.value = await productService.getAll()
  }

  return {
    products,
    fetchProducts,
  }
})
