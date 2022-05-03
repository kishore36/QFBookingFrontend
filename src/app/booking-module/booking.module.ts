import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDescriptionComponent } from './service-description/service-description.component';
import { BooknowComponent } from './book-now/book-now.component';
import { RouterModule, Routes } from '@angular/router';
import { SubServiceListComponent } from './sub-service-list/sub-service-list.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ImgSliderComponent } from './home/img-slider/img-slider.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { ServiceSectionComponent } from './home/service-section/service-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const bookRoutes:Routes=[
  {path:"home",component:ServiceDescriptionComponent},
  {path:"book-now",component:BooknowComponent},
  {path:"service-list",component:ServiceListComponent},
  {path:"service-description",component:ServiceDescriptionComponent},
  {path:"book-now",component:BooknowComponent},
  {path:"sub-service/:id",component:SubServiceListComponent},
  {path:"cart",component:CartComponent},
  {path:"Home",component:HomeComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent}
]

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDescriptionComponent,
    BooknowComponent,
    SubServiceListComponent,
    CartComponent,
    HomeComponent,
    ImgSliderComponent,
    TestimonialsComponent,
    ServiceSectionComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ]
})
export class BookingModule { }
