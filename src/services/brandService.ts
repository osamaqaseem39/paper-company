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
      const brands: Brand[] = (json?.data ?? []).map(enrichBrandWithLocalLogo)
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

function normalizeKey(value?: string): string | undefined {
  if (!value) return undefined
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '')
    .trim()
}

// Maps normalized brand names/slugs to local logo image paths in /public/images
const BRAND_LOGO_MAP: Record<string, string> = {
  // Hewlett-Packard / HP
  hp: '/images/hp logo.png',
  hewlettpackard: '/images/hp logo.png',
  // International Paper
  internationalpaper: '/images/international paper (black).jpg',
  // Sappi
  sappi: '/images/SAPPI.jpg',
  // Nippon Paper Industries
  nipponpaper: '/images/NIPPON PAPER INDUS.jpg',
  nipponpaperindustries: '/images/NIPPON PAPER INDUS.jpg',
  // Oji Paper
  ojipaper: '/images/OJI PAPER.jpg',
  oji: '/images/OJI PAPER.jpg',
  // Daio Paper Corporation
  daiopaper: '/images/DAIO PAPER CORPORAITON.jpg',
  daiopapercorporation: '/images/DAIO PAPER CORPORAITON.jpg',
  // Moorim
  moorim: '/images/MOORIM LOGO.jpg',
  // Kruger Products
  krugerproducts: '/images/KRUGER PRODUCTS.jpg',
  kruger: '/images/KRUGER PRODUCTS.jpg',
  // Chenming Paper
  chenming: '/images/Chenmingpaper.png',
  chenmingpaper: '/images/Chenmingpaper.png',
  // Iggesund / Holmen
  iggesund: '/images/iggesund paperboard.jpg',
  iggesundholmen: '/images/IGGESUND HOLMEN GRP.jpg',
  holmen: '/images/IGGESUND HOLMEN GRP.jpg',
  // Artone
  artone: '/images/ARTONE LOGO.jpg',
}

function enrichBrandWithLocalLogo(brand: Brand): Brand {
  if (brand.logo) return brand
  const bySlug = normalizeKey(brand.slug)
  const byName = normalizeKey(brand.name)
  const mapped = (bySlug && BRAND_LOGO_MAP[bySlug]) || (byName && BRAND_LOGO_MAP[byName])
  if (!mapped) return brand
  return { ...brand, logo: mapped }
}


