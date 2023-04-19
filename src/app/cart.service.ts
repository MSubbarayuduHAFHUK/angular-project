import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { ShippingDetail, ShippingFormDetails } from './shipping';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];
  finalOrderDetails!: ShippingFormDetails;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingDetail[]>('/assets/shipping.json');
  }

  getOrderDetails() {
    return this.finalOrderDetails;
  }
}
