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
  stock?: number;
  minStock?: number;
  images: ProductImage[];
  rating: number;
  reviewCount: number;
  category?: string;
  brand?: string;
  tags?: string[];
  attributes?: string[];
  variations?: string[];
  seo?: any;
  status?: string;
  isActive?: boolean;
  isFeatured?: boolean;
  isDigital?: boolean;
  reviews?: any[];
  viewCount?: number;
  salesCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  _id: string;
  name: string;
  sku: string;
  price: number;
  salePrice?: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  gsm?: string;
  size?: string;
  sheets?: string;
  weight?: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
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

