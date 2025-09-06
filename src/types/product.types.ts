// Updated Website Types - Importing shared types from backend
import { 
  WebsiteProduct, 
  ProductType, 
  StockStatus, 
  ProductStatus, 
  ProductDimensions, 
  SEOData, 
  ProductImage, 
  ProductFilters, 
  ProductStats,
  CartItem as BaseCartItem
} from "../../../ecommerce-nest/src/common/types/product.types";

// Re-export shared types for convenience
export {
  ProductType,
  StockStatus,
  ProductStatus,
  ProductDimensions,
  SEOData,
  ProductImage,
  ProductFilters,
  ProductStats
};

// Website-specific Product Interface
export interface Product extends WebsiteProduct {
  // Additional website-specific computed fields
  discountPercentage?: number;
  isNew?: boolean;
  isLowStock?: boolean;
  categoryName?: string;
  brandName?: string;
}

// Cart Item Interface (Website-specific)
export interface CartItem extends BaseCartItem {
  // Additional cart-specific fields
  image: string; // Single image URL for cart display
}

// Category Interface
export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive: boolean;
  parentId?: string;
  children?: Category[];
}

// Brand Interface
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  isActive: boolean;
}

// Cart Context Type
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
}
