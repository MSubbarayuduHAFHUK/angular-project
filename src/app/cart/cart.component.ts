import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

import { Product } from '../products';
import { ShippingFormDetails } from '../shipping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    products: undefined,
  });

  onSubmit(): void {
    this.cartService.finalOrderDetails = {
      name: this.checkOutForm.value.name,
      address: this.checkOutForm.value.address,
      products: this.cartService.getItems(),
    };
    this.items = this.cartService.clearCart();
    console.log(
      'Your order has been submitted',
      this.cartService.finalOrderDetails
    );
    this.checkOutForm.reset();
    this.router.navigate(['/order-confirmation']);
  }
}
