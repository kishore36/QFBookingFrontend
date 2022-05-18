import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  grandTotal: any = 0;
  cartItems: any = 0;
  orderDetails:any;
  orderForm:FormGroup;

  constructor(private router: Router,public order:OrderService) {
    this.orderForm=new FormGroup({
      _id:new FormControl(null),
      name:new FormControl(''),
      address:new FormControl(''),
      // pincode:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl('')
  });
  }

  ngOnInit(): void {
    this.getGrandTotal();
  }

  getGrandTotal() {
    if (localStorage.getItem('gTotal')) {
      this.grandTotal = parseInt(localStorage.getItem('gTotal') || '{}');
    }
  };

  placeOrder() {
    localStorage.removeItem('myCart');
    localStorage.removeItem('gTotal');
    // this.router.navigate(['/booking/services']);
  };
isResetValue(){
    this.orderForm.setValue({
      id:'null',
      fullName:'',
      streetAddress:'',
      pincode:'',
      EmailAddress:''
    })
  };
  submitOrder(){
    console.log(this.orderForm.value)
    // if(this.orderForm.valid){
    //   this.order.insertOrderData(this.orderForm.value).subscribe(res=>{
    //     console.log(res)
    //     localStorage.setItem('orderData',JSON.stringify(res))
    //   },err=>{
    //     console.log('Error while receiving from respone:'+err)
    //   })
    //   this.orderForm.reset();
    //   this.isResetValue();
    // }
  }
}
