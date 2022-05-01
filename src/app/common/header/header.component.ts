import { Component, OnInit } from '@angular/core';
import { subServices } from 'src/app/services/sub-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartItems:any=0;

  constructor(private subService:subServices) {
    this.subService.cartSubject.subscribe(res => {this.cartItems = res
      console.log(res)})
      console.log(this.cartItems)
   }
  
  ngOnInit() {
  }

}
