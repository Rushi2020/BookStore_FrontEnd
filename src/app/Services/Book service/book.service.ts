import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http service/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;
base=environment.BaseUrl

  constructor(private httpservice:HttpService) {  this.token = localStorage.getItem("token")}

  getallbooks() {
    this.token = localStorage.getItem('token');
    console.log("get all books is called")
    // console.log(data)
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json-patch+json',
            'Authorization':  'Bearer ' + this.token		
          })
        }
        return this.httpservice.getService(this.base+'Book/GetAllBooks',true, header)
      }

      getBookById(data:any) {
        this.token=localStorage.getItem("token")
        console.log(data);
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+this.token,
          }),
        };
        return this.httpservice.getService(this.base+`Book/GetBookBYID?BookId=${data.bookId}`, true,header );
      }


   addFeedback(data:any){
        this.token=localStorage.getItem("token")
        console.log(data);
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+this.token,
          }),
        };
        return this.httpservice.postService(this.base+'Feedback/AddFeedback',data,true,header)
      }
      
      // addFeadback(data: any) {
      //   console.log(data);
      //   this.token=localStorage.getItem("token")
      //   let header = {
      //     headers: new HttpHeaders({
      //       'Content-Type': 'application/json',
      //       'Authorization' : 'Bearer '+ this.token,
      //     }),
      //   };
      //   return this.httpService.postservices('FeadBack/AddFeedback', data,true, header);
      // }
      getfeedBack(data: any) {
        console.log(data);
        this.token=localStorage.getItem("token")
    
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        // console.log(data);
        return this.httpservice.getService(this.base+`Feedback/GetFeedback?BookId=${data}`, true,header );
        
      }
   
}
