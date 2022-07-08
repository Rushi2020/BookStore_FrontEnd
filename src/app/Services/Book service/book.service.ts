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

      addToBag(data: any) {
        console.log(data);
        this.token=localStorage.getItem("token")
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json-patch+json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        return this.httpservice.postService(this.base+'Cart/AddCart', data,true, header);
      }

      addwishlist(data: any) {
        console.log(data);
        this.token=localStorage.getItem("token")
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        return this.httpservice.postService(this.base+'WishList/AddWishlist', data,true, header);
      }
    
      updateToLess(CartId:any,data: any) {
        console.log(data,CartId);
        this.token=localStorage.getItem("token")
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        return this.httpservice.putService(this.base+`Cart/Update Cart?CartId=${CartId}`, data,true, header);
      }

      getAllCart() {
        this.token = localStorage.getItem('token');
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + this.token		
          })
        }
        return this.httpservice.getService(this.base+`Cart`,true,header)
      }



      deletcart(data: any) {
        console.log(data);
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        console.log("delete cart",data)
        return this.httpservice.deleteService(this.base+`Cart/Delete Cart?CartId=${data.cartId}`,  true,header );
      }


      removewishlist(reqdata: any) {
        console.log(reqdata);
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        console.log("ganya",reqdata)
        return this.httpservice.deleteService( this.base+`WishList/RemoveWishList?wishListId=${reqdata.wishListId}`,  true,header );
      }


      getAllwishlist(){
        this.token = localStorage.getItem('token');
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + this.token		
          })
        }
        return this.httpservice.getService(this.base+`WishList`,true,header)
      }

      addOrder(data: any) {
        console.log(data);
        this.token=localStorage.getItem("token")
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json-patch+json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        return this.httpservice.postService(this.base+'Orders/AddOrder', data,true, header);
      }

      adAddress(data: any) {
        console.log(data);
        this.token=localStorage.getItem("token")
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ this.token,
          }),
        };
        return this.httpservice.postService(this.base+'Address/AddAddress', data,true, header);
      }

      getAddress(){
        this.token = localStorage.getItem('token');
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + this.token		
          })
        }
        return this.httpservice.getService(this.base+`Address/GetAllAddress`,true,header)
      }


      getAllorder(){
        this.token = localStorage.getItem('token');
        let header = {
          headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization':  'Bearer ' + this.token		
          })
        }
        return this.httpservice.getService(this.base+`Orders/GetAllOrders`,true,header)
        
      }
    
}
