import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { subServices } from 'src/app/services/sub-services.service';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order-services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  grandTotal: any = 0;
  cartItems: any = 0;
  orderDetails: any;
  userDetailsForm: FormGroup;
  cartDetails: any;
  userDetails: any;
  subServiceIdList: any = [];
  userId = '6280e8388510fa077c2d1622';

  constructor(
    private router: Router,
    public orderService: OrderService,
    public userService: AuthService,
    public subService: subServices
  ) {
    this.userDetailsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      location: new FormGroup({
        city: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
      }),
    });
  }

  ngOnInit(): void {
    this.getGrandTotal();
    this.getCartDetails();
  }
  getCartDetails() {
    this.cartDetails = JSON.parse(localStorage.getItem('myCart') || '{}');
    this.cartDetails.forEach((subservice: any) => {
      this.subServiceIdList.push(subservice._id);
    });
  }

  getGrandTotal() {
    if (localStorage.getItem('gTotal')) {
      this.grandTotal = parseInt(localStorage.getItem('gTotal') || '{}');
    }
  }

  submitOrder() {
    if (this.userDetailsForm.valid) {
      this.userService
        .updateUserDetails(this.userDetailsForm.value, this.userId)
        .subscribe(
          async (resData: any) => {
            this.userDetails = await resData;
            let orderObj = {
              subService: this.subServiceIdList,
              user: resData.data.user._id,
              confirmationCode: 'QF-004',
            };
            this.orderService.insertOrderData(orderObj).subscribe((res) => {
              this.orderDetails = res;
              console.log(this.orderDetails);
            });
          },
          (err) => {
            console.log(err);
          }
        );
      this.userDetailsForm.reset();
      localStorage.removeItem('myCart');
      localStorage.removeItem('gTotal');
      this.subService.cartSubject.next(this.cartDetails.length);
    }
  }
}
