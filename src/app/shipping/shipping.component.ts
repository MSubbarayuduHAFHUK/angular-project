import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { ShippingDetail } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<ShippingDetail[]>;

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
