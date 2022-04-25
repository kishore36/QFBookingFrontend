import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ROUTES, Routes } from '@angular/router';

const appRoutes:Routes=[
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:"sign-up",component:SignUpComponent},
  {path:"login",component:LoginComponent}
]


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports:[FormsModule]
})
export class AuthModule { }
