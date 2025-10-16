import { getProductsFromApi } from '../api/product'

export function useProductService() {
  async function getAll() {
    return await getProductsFromApi()
  }

  return {
    getAll,
  }
}
