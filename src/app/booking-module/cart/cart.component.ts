import { Component, OnInit } from '@angular/core';
import { subServices } from 'src/app/services/sub-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartDetails: any[] = [];
  grandTotal = 0;

  constructor(public subService:subServices) {}

  ngOnInit(): void {
    this.getCartDetails();
    this.getGrandTotal();
  }

  getCartDetails() {
    this.cartDetails = JSON.parse(localStorage.getItem('myCart') || '{}');
  }

  getGrandTotal() {
    if (localStorage.getItem('myCart')) {
      this.cartDetails = JSON.parse(localStorage.getItem('myCart') || '{}');
      this.grandTotal = this.cartDetails.reduce((key, value) => {
        return key + value['rate'] * value['unit'];
      }, 0);
    }
    localStorage.setItem('gTotal', this.grandTotal.toString());
  }

  removeAll() {
    localStorage.removeItem('myCart');
    this.cartDetails = [];
    this.getGrandTotal();
    this.grandTotal = 0;
  }

  increase_count(sId: any, sUnit: any) {
    for (let i = 0; i < this.cartDetails.length; i++) {
      if (this.cartDetails[i]._id === sId) {
        this.cartDetails[i]._id = parseInt(sUnit) + 1;
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.cartDetails));
    this.getGrandTotal();
  }

  decrease_count(sId: any, sUnit: any) {
    for (let i = 0; i < this.cartDetails.length; i++) {
      if (this.cartDetails[i]._id === sId) {
        if (sUnit > 1) {
          this.cartDetails[i].quantity = parseInt(sUnit) - 1;
        }
      }
    }
    localStorage.setItem('myCart', JSON.stringify(this.cartDetails));
    this.getGrandTotal();
  }

  singleDelete(sId: any) {
    if (localStorage.getItem('myCart')) {
      this.cartDetails = JSON.parse(localStorage.getItem('myCart') || '{}');
      for (let i = 0; i < this.cartDetails.length; i++) {
        console.log(this.cartDetails[i]._id,sId);
        if (this.cartDetails[i]._id === sId) {
          this.cartDetails.splice(i, 1);  
          localStorage.setItem('myCart', JSON.stringify(this.cartDetails));
          this.getGrandTotal();
          this.subService.cartSubject.next(this.cartDetails.length)
        }
      }
    }
  }

  viewProduct(sId: any) {
    if (localStorage.getItem('myCart')) {
      this.cartDetails = JSON.parse(localStorage.getItem('myCart') || '{}');
      for (let i = 0; i < this.cartDetails.length; i++) {
        if (parseInt(this.cartDetails[i]._id) === parseInt(sId)) {
          localStorage.setItem('sId', sId.toString());
        }
      }
    }
  }
}
