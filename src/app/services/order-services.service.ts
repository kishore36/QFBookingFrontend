import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class OrderService{
    public mainUrl = environment.BASE_API_URL;
    
    constructor(private _http:HttpClient){}

    insertOrderData(orderValue:any){
        return this._http.post(`${this.mainUrl}/order`,orderValue);
    }

}