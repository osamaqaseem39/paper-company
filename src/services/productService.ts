import { Product, ApiResponse } from '../types/product.types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export const productService = {
  async getFeaturedProducts(limit: number = 6): Promise<ApiResponse<{ products: Product[] }>> {
    try {
      const res = await fetch(`${API_BASE_URL}/products/featured?limit=${limit}`, { cache: 'no-store' })
      if (!res.ok) {
        const err = await safeJson(res)
        return { success: false, message: err?.message || 'Failed to fetch featured products' }
      }
      const json = await res.json()
      // Expect backend shape { data: Product[] }
      const products: Product[] = json?.data ?? []
      return { success: true, data: { products } }
    } catch (e) {
      return { success: false, message: 'Network error while fetching featured products' }
    }
  },
}

async function safeJson(res: Response): Promise<any | undefined> {
  try {
    return await res.json()
  } catch {
    return undefined
  }
}

