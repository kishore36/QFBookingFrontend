import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpComponent } from './auth/otp/otp.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: 'booking', pathMatch: 'full'},
  { path: 'booking', loadChildren: () => import('./booking-module/booking.module').then(m => m.BookingModule)},
  {path:'user',component:UserProfileComponent},
  {path:'otp',component:OtpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
