import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/Book service/book.service';
import { DataService } from 'src/app/Services/data service/data.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  booksArray: any = [];
  bookQuantity : any;
  Book:any; //variable for store id of book
  orderQuantity=1;
  // bookId:any;


  constructor(private router:Router,private bookservice:BookService) { }

  ngOnInit(): void {
    this.getAllBook()
   
  }
  getAllBook() {
    this.bookservice.getallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      this.booksArray.reverse();
      console.log(this.booksArray);
    });
  }

  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quickview')
  }

  // showDescription(bookId:number){
  //    this.router.navigate([`dashboard/bookdetails`]);
  // }
 
  lowtohigh(){
     this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice); //.price is coming from backend api
  }
  hightolow(){
     this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
     this.booksArray.reverse();
  }
}
