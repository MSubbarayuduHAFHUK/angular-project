import { Component } from '@angular/core';
import { ShippingFormDetails } from '../shipping';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent {
  constructor(private cartService: CartService) {}

  orderDetails = this.cartService.getOrderDetails();
}
