type ProductVariation = {
  title: string;
  options: string[];
};

export type Product = {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  description: string;
  variations: ProductVariation[];
  category: string;
  images: string[];
  rating: number;
  review_count: number;
  free_shipping: boolean;
  shipment_days: number;
};
