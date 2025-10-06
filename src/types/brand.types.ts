export interface Brand {
  _id: string
  name: string
  slug: string
  description?: string
  logo?: string
  website?: string
  country?: string
  foundedYear?: number
  isActive?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
  metadata?: Record<string, any>
}


