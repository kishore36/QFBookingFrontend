import { Component, OnInit } from '@angular/core';
import { subServices } from 'src/app/services/sub-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public cartItems: any;

  constructor(private subService: subServices) {
    if (localStorage.getItem('myCart')) {
      this.cartItems = JSON.parse(localStorage.getItem('myCart') || '{}');
      this.cartItems = this.cartItems.length;
    } else {
      this.cartItems = 0;
    }
  }

  ngOnInit() {}
}
