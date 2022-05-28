import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public mainUrl = environment.BASE_API_URL;
  constructor(private _http: HttpClient) {}

  registerData(registerValue: any) {
    return this._http.post(`${this.mainUrl}auth/register`, registerValue);
  }

  verifyUser(otpDetails: any) {
    return this._http.post(`${this.mainUrl}auth/verify`, otpDetails);
  }

  updateUserDetails(userDetails: any, userId: any) {
    return this._http.patch(
      `${this.mainUrl}auth/updateUser/${userId}`,
      userDetails
    );
  }

  loginData(loginDetails: any) {
    return this._http.post(
      `${this.mainUrl}auth/login_with_phone`,
      loginDetails
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  public get userValue() {
    const token = localStorage.getItem('token');
    return token;
  }
}
