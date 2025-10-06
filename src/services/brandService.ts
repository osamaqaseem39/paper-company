import type { Brand } from '../types/brand.types'
import type { ApiResponse } from '../types/product.types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://paper-company-server.vercel.app/api'

export const brandService = {
  async getActiveBrands(limit: number = 20, page: number = 1): Promise<ApiResponse<{ brands: Brand[] }>> {
    try {
      const params = new URLSearchParams({ limit: String(limit), page: String(page) })
      const res = await fetch(`${API_BASE_URL}/brands/active?${params.toString()}`, { cache: 'no-store' })
      if (!res.ok) {
        const err = await safeJson(res)
        return { success: false, message: err?.message || 'Failed to fetch brands' }
      }
      const json = await res.json()
      const brands: Brand[] = json?.data ?? []
      return {
        success: true,
        data: { brands },
        total: json?.total,
        page: json?.page,
        limit: json?.limit,
        totalPages: json?.totalPages,
      }
    } catch (e) {
      return { success: false, message: 'Network error while fetching brands' }
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


