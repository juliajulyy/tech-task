import { Product } from "@/types";
import { Wishlist } from "@/types/wishlist";
import axios, { AxiosInstance } from "axios";

export class ProductService {
  axiosInstance: AxiosInstance;

  constructor() {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
  }

  async getProducts(productId: string) {
    const res = await this.axiosInstance.get<Product>(`/products/${productId}`);
    return res.data;
  }

  async addToWishlist(productId: number) {
    const result = await this.axiosInstance.post<Wishlist>(
      `/wishlist?productId=${productId}`,
      {
        productId,
      }
    );

    return result.data?.id;
  }

  async removeFromWishlist(wishlistId: string) {
    await this.axiosInstance.delete(`/wishlist/${wishlistId}`);
  }

  async getWishlistId(productId: string): Promise<string | undefined> {
    try {
      const result = await this.axiosInstance.get<Wishlist[]>(
        `/wishlist?productId=${productId}`
      );

      const wishlistId = result.data[0].id;

      return wishlistId;
    } catch {
      return;
    }
  }
}
