// Checkout Service for Website
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://paper-company-server.vercel.app/api';

export interface CheckoutData {
  // Order Information
  items: Array<{
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
  }>;
  
  // Shipping Information
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    province: string;
  };
  
  // Payment Information
  payment: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  };
  
  // Order Totals
  subtotal: number;
  shippingCost: number;
  total: number;
  
  // Additional Information
  notes?: string;
  couponCode?: string;
}

export interface CheckoutResponse {
  success: boolean;
  orderId?: string;
  paymentUrl?: string;
  message?: string;
  error?: string;
}

class CheckoutService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async processCheckout(checkoutData: CheckoutData): Promise<CheckoutResponse> {
    try {
      const response = await this.request<CheckoutResponse>('/checkout', {
        method: 'POST',
        body: JSON.stringify(checkoutData),
      });
      return response;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Checkout failed',
      };
    }
  }

  async validateCoupon(couponCode: string): Promise<{ valid: boolean; discount?: number; message?: string }> {
    try {
      const response = await this.request<{ valid: boolean; discount?: number; message?: string }>(`/coupons/validate/${couponCode}`, {
        method: 'GET',
      });
      return response;
    } catch (error) {
      return {
        valid: false,
        message: error instanceof Error ? error.message : 'Invalid coupon code',
      };
    }
  }

  async getShippingRates(address: Partial<CheckoutData>): Promise<{ rates: Array<{ name: string; price: number; estimatedDays: number }> }> {
    try {
      const response = await this.request<{ rates: Array<{ name: string; price: number; estimatedDays: number }> }>('/shipping/rates', {
        method: 'POST',
        body: JSON.stringify(address),
      });
      return response;
    } catch (error) {
      return {
        rates: [
          { name: 'Standard Shipping', price: 500, estimatedDays: 3 },
          { name: 'Express Shipping', price: 1000, estimatedDays: 1 },
        ],
      };
    }
  }

  async createPaymentIntent(amount: number, currency: string = 'PKR'): Promise<{ clientSecret: string; paymentIntentId: string }> {
    try {
      const response = await this.request<{ clientSecret: string; paymentIntentId: string }>('/payments/create-intent', {
        method: 'POST',
        body: JSON.stringify({ amount, currency }),
      });
      return response;
    } catch (error) {
      throw new Error('Failed to create payment intent');
    }
  }

  async confirmPayment(paymentIntentId: string, paymentMethodId: string): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await this.request<{ success: boolean; message?: string }>('/payments/confirm', {
        method: 'POST',
        body: JSON.stringify({ paymentIntentId, paymentMethodId }),
      });
      return response;
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Payment confirmation failed',
      };
    }
  }

  formatCardNumber(value: string): string {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Add spaces every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19);
  }

  formatExpiryDate(value: string): string {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Add slash after 2 digits
    if (digits.length >= 2) {
      return digits.slice(0, 2) + '/' + digits.slice(2, 4);
    }
    
    return digits;
  }

  formatCVV(value: string): string {
    // Remove all non-digits and limit to 4 characters
    return value.replace(/\D/g, '').slice(0, 4);
  }

  async validatePayment(paymentData: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  }): Promise<{ valid: boolean; errors?: string[] }> {
    const errors: string[] = [];
    
    // Validate card number (basic Luhn algorithm)
    const cardNumber = paymentData.cardNumber.replace(/\s/g, '');
    if (!this.isValidCardNumber(cardNumber)) {
      errors.push('Invalid card number');
    }
    
    // Validate card name
    if (!paymentData.cardName.trim()) {
      errors.push('Card name is required');
    }
    
    // Validate expiry date
    if (!this.isValidExpiryDate(paymentData.expiryDate)) {
      errors.push('Invalid expiry date');
    }
    
    // Validate CVV
    if (!this.isValidCVV(paymentData.cvv)) {
      errors.push('Invalid CVV');
    }
    
    return {
      valid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined,
    };
  }

  private isValidCardNumber(cardNumber: string): boolean {
    // Basic validation - should be 13-19 digits
    if (!/^\d{13,19}$/.test(cardNumber)) {
      return false;
    }
    
    // Luhn algorithm
    let sum = 0;
    let isEven = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    return sum % 10 === 0;
  }

  private isValidExpiryDate(expiryDate: string): boolean {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiryDate)) {
      return false;
    }
    
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      return false;
    }
    
    return true;
  }

  private isValidCVV(cvv: string): boolean {
    return /^\d{3,4}$/.test(cvv);
  }

  async createOrder(orderData: CheckoutData): Promise<CheckoutResponse> {
    try {
      const response = await this.request<CheckoutResponse>('/orders', {
        method: 'POST',
        body: JSON.stringify(orderData),
      });
      return response;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Order creation failed',
      };
    }
  }
}

export const checkoutService = new CheckoutService(API_BASE_URL);
