import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http:HttpClient) { }

  postService(url:string, payload:any , token:boolean=true, httpOptions:any){
    return this.http.post(url, payload, token && httpOptions )
   }

   putService(url:string, payload:any , token:boolean=true, httpOptions:any){
    return this.http.put(url, payload, token && httpOptions )
   }
}
