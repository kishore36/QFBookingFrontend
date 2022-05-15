import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subServices } from 'src/app/services/sub-services.service';

@Component({
  selector: 'app-sub-service-list',
  templateUrl: './sub-service-list.component.html',
  styleUrls: ['./sub-service-list.component.scss'],
})
export class SubServiceListComponent implements OnInit {
  public unit: number = 1;
  public subServiceDetails: any;
  serviceId: any;
  subServicesId: any;
  listOfId: any;
  cartItems: any[] = [];
  constructor(private subService: subServices, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.listOfId = params['id'];
    });
    this.subServiceLists();
  }
  decrement(subId: any) {
    if (subId.unit != 1) {
      subId.unit--;
    }
  }
  increment(subId: any) {
    if (subId.unit >= 1) {
      subId.unit++;
    }
  }
  subServiceLists() {
    this.subService.getAllSubServices().subscribe((res) => {
      this.subServiceDetails = res.data.SubServices;
      this.subServicesId = this.subServiceDetails.filter(
        (sub: any) => this.listOfId === sub.service._id
      );
    });
  }
  addCartDetails(subId: any) {
    let checkForNull = localStorage.getItem('myCart');
    if (checkForNull == null) {
      let storageArray = [];
      storageArray.push(subId);
      localStorage.setItem('myCart', JSON.stringify(storageArray));
    } else {
      let id = subId._id;
      let index: number = -1;
      this.cartItems = JSON.parse(localStorage.getItem('myCart') || '{}');
      for (let i = 0; i < this.cartItems.length; i++) {
        if (parseInt(id) === parseInt(this.cartItems[i]._id)) {
          this.cartItems[i].unit = subId.unit;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.cartItems.push(subId);
        localStorage.setItem('myCart', JSON.stringify(this.cartItems));
      } else {
        localStorage.setItem('myCart', JSON.stringify(this.cartItems));
      }
    }
    this.cartNumberFunction();
  }
  cartNumber: number = 0;
  cartNumberFunction() {
    let cartValue: any = JSON.parse(localStorage.getItem('myCart') || '{}');
    this.cartNumber = cartValue.length;
    this.subService.cartSubject.next(this.cartNumber);
  }
}
