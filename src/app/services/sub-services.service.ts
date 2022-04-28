import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
  })
  export class subServices{

      apiUrl=environment.BASE_API_URL;

      constructor( private http:HttpClient){

      }
      errorHandler(error: any) {
        console.log('Service api error:', error);
        return throwError(error);
      }
     
      getAllSubServices(): Observable<any> {
        return this.http.get<any>(this.apiUrl+'subService')
          .pipe(catchError(this.errorHandler));
      }
  }