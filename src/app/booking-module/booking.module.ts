import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { BooknowComponent } from './book-now/book-now.component';
import { RouterModule, Routes } from '@angular/router';
import { SubServiceListComponent } from './sub-service-list/sub-service-list.component';
import { CartComponent } from './cart/cart.component';

const bookRoutes:Routes=[
  {path:"home",component:ServiceDescriptionComponent},
  {path:"book-now",component:BooknowComponent},
  {path:"service-list",component:ServiceListComponent},
  {path:"service-description",component:ServiceDescriptionComponent},
  {path:"book-now",component:BooknowComponent},
  {path:"sub-service/:id",component:SubServiceListComponent},
  {path:"cart",component:CartComponent}
]

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDescriptionComponent,
    BooknowComponent,
    SubServiceListComponent,
    CartComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ]
})
export class BookingModule { }
