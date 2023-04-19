import { Product } from './products';

export interface ShippingDetail {
  type: string;
  price: number;
}

export interface ShippingFormDetails {
  name: string | null | undefined;
  address: string | null | undefined;
  products: Product[];
}
