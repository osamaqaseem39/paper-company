export interface ProductImage {
  url: string;
  alt?: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  sku: string;
  price: number;
  salePrice?: number;
  images: ProductImage[];
  rating: number;
  reviewCount: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
}

