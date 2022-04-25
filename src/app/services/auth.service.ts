import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    public mainUrl = environment.BASE_API_URL;
    constructor(private _http:HttpClient){

    }
    registerData(registerValue:any){
        return this._http.post(`${this.mainUrl}/register`,registerValue)
    }
}