import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book service/book.service';
import { DataService } from 'src/app/Services/data service/data.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
cartArray:any;
booksArray:any;
show=false;
addshow=false;
order=false;
addresstArray:any;
addressId:any;
address:any;
city:any;
state:any;
value:any;

  constructor(private bookservice:BookService, private route:Router,private data:DataService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllcart()
  }
   getAllcart(){
    this.bookservice.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response; 
      console.log(this.cartArray);
      this.snack.open('get all cart book  Successfull', '', {
        duration: 3000,
      })
    });
  }

  removecart(cartId:any){
    let reqdata={
      cartId:cartId
    }
    this.bookservice.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
     this.snack.open('remove cart book  Successfull', '', {
      duration: 3000,
    })
    });
  }

  updateToLess(cartId:any,orderQuantity:any,bookId:any){
    let data={
      orderQuantity:(orderQuantity-1),
      bookId:bookId,
    } 
    if(orderQuantity !=1 && orderQuantity !=0  ){
    this.bookservice.updateToLess(cartId,data).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
     this.snack.open('update cart book  Successfull', '', {
      duration: 3000,
    })
    });}
  }


  updateToAdd(cartId:any,bookQuantity:any,bookId:any){
    let data={
      bookQuantity:(bookQuantity+1),
      bookId:bookId,
    } 
    console.log("add")
    if(bookQuantity>=0){
    this.bookservice.updateToLess(cartId,data).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
     this.snack.open('update cart book  Successfull', '', {
      duration: 3000,
    })
    });
  }
}

addOrder(bookId:any,bookQuantity:any){
  let data = {
    bookId: bookId,
    addressId:this.addressId,
    bookQuantity:bookQuantity,
  }
  console.log(data)
  this.bookservice.addOrder(data).subscribe(
    (response: any) => {
      console.log('Add to wishlist', response);
      this.snack.open('your order is Successfull', '', {
        duration: 3000,
      })
    },
    (error: any) => {
      console.log(error);
    }
  );
}

getAllAddres() {
  this.bookservice.getAddress().subscribe((response: any) => {
    console.log(response);
    this.addresstArray = response.response;
    this.addressId = this.addresstArray[0].addressId;
    console.log(this.addresstArray);
    this.snack.open('get Address Successfull', '', {
      duration: 3000,
    });
  });
}


ordershow(){
  console.log("calling hide")
  this.order=!this.order
}

hideAndShow(){
  console.log("calling hide")
  this.show=!this.show
}
addshowhide(){
  console.log("calling hide")
  this.addshow=!this.addshow
}

addAddress() {
  let data = {
    Address:this.address,
    City:this.city,
    State:this.state,
    TypeId:this.value
  }
  console.log(data)
  this.bookservice.adAddress(data).subscribe(
    (response: any) => {
      console.log('Add to Address success', response);
      this.snack.open('your order is Successfull', '', {
        duration: 3000,
      })
    },
    (error: any) => {
      console.log(error);
    }
  );
}
}
