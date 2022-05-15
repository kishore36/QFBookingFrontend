import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  grandTotal: any = 0;
  cartItems: any = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getGrandTotal();
  }

  getGrandTotal() {
    if (localStorage.getItem('gTotal')) {
      this.grandTotal = parseInt(localStorage.getItem('gTotal') || '{}');
    }
  }

  placeOrder() {
    localStorage.removeItem('myCart');
    localStorage.removeItem('gTotal');
    this.router.navigate(['/booking/services']);
  }
}
