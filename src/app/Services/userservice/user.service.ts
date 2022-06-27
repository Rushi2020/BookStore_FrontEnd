import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.BaseUrl

  constructor(private httpservice:HttpService) { }

  
  register(data:any){
    let header=
    {headers:new HttpHeaders({ 'Content-Type':'application/json-patch+json'})
  }
  console.log(data)
   return this.httpservice.postService(this.base+'User/register/', data,false,header)
}

login(data:any){
  console.log(data)
  let header=
  { headers:new HttpHeaders({'content-type':'application/json-patch+json'})
   
  } 
  return this.httpservice.postService(this.base+`User/userLogin/`, data ,false,header)

}

forgetPassword(data:any){
  console.log(data)
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
    }),
  }
  return this.httpservice.putService(this.base+`User/forgotpassword?email=${data.email}`,{} ,true,header)
}

resetPassword(data:any, token:any){
  console.log(data)
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }),
  }
  return this.httpservice.putService(this.base+`User/resetpassword/`,data,true,header)
}

}


