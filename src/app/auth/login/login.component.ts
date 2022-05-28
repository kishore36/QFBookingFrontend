import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  contact: any;
  contactForm: any;
  isDisabled = true;
  isRegistered = false;
  otpValue: any;
  userId: any;
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      phone: new FormControl(''),
      // isChecked : new FormControl(true)
    });
  }
  onSubmit() {
    this._auth.loginData(this.contactForm.value).subscribe((res: any) => {
      this.isRegistered = true;
      this.userId = res.data.userId;
    });
    // this.router.navigateByUrl('/otp')
  }

  onSignup() {
    let otpObj = {
      otp: this.otpValue,
      userId: this.userId,
    };
    this._auth.verifyUser(otpObj).subscribe((res: any) => {
      this.otpValue = '';
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('userId', JSON.stringify(res.data.userId));
      this.router.navigateByUrl('/booking/order');
    });
  }
}
