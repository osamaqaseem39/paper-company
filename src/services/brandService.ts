import type { Brand } from '../types/brand.types'
import type { ApiResponse } from '../types/product.types'

// Local brands data with logos from images folder
const LOCAL_BRANDS: Brand[] = [
  {
    _id: '1',
    name: 'HP Papers',
    slug: 'hp-papers',
    logo: '/images/hp logo.png',
    country: 'Brazil',
    website: 'https://www.hp.com',
    isActive: true
  },
  {
    _id: '2',
    name: 'International Paper',
    slug: 'international-paper',
    logo: '/images/international paper (black).jpg',
    country: 'USA',
    isActive: true
  },
  {
    _id: '3',
    name: 'Sappi',
    slug: 'sappi',
    logo: '/images/SAPPI.jpg',
    country: 'South Africa',
    isActive: true
  },
  {
    _id: '4',
    name: 'Nippon Paper Industries',
    slug: 'nippon-paper-industries',
    logo: '/images/NIPPON PAPER INDUS.jpg',
    country: 'Japan',
    isActive: true
  },
  {
    _id: '5',
    name: 'Oji Paper',
    slug: 'oji-paper',
    logo: '/images/OJI PAPER.jpg',
    country: 'Japan',
    isActive: true
  },
  {
    _id: '6',
    name: 'Daio Paper Corporation',
    slug: 'daio-paper-corporation',
    logo: '/images/DAIO PAPER CORPORAITON.jpg',
    country: 'Japan',
    isActive: true
  },
  {
    _id: '7',
    name: 'Moorim',
    slug: 'moorim',
    logo: '/images/MOORIM LOGO.jpg',
    country: 'South Korea',
    isActive: true
  },
  {
    _id: '8',
    name: 'Kruger Products',
    slug: 'kruger-products',
    logo: '/images/KRUGER PRODUCTS.jpg',
    country: 'Canada',
    isActive: true
  },
  {
    _id: '9',
    name: 'Chenming Paper',
    slug: 'chenming-paper',
    logo: '/images/Chenmingpaper.png',
    country: 'China',
    isActive: true
  },
  {
    _id: '10',
    name: 'Iggesund Holmen',
    slug: 'iggesund-holmen',
    logo: '/images/IGGESUND HOLMEN GRP.jpg',
    country: 'Sweden',
    isActive: true
  },
  {
    _id: '11',
    name: 'Artone',
    slug: 'artone',
    logo: '/images/ARTONE LOGO.jpg',
    country: 'Japan',
    isActive: true
  }
]

export const brandService = {
  async getActiveBrands(limit: number = 20, page: number = 1): Promise<ApiResponse<{ brands: Brand[] }>> {
    // Return local brands data only - no API calls
    const activeBrands = LOCAL_BRANDS.filter(brand => brand.isActive)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedBrands = activeBrands.slice(startIndex, endIndex)
    
    return {
      success: true,
      data: { brands: paginatedBrands },
      total: activeBrands.length,
      page,
      limit,
      totalPages: Math.ceil(activeBrands.length / limit),
    }
  },
}
