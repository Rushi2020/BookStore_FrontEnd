import { Component, OnInit, VERSION } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/Book service/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
 Book:any;
 booksArray:any=[];
 bookId:any;
 comments:any;
 booksArr: any = [];
 rating:any;
 overallRating:any;
 gfg=5;
 orderQuantity= 1;
 Bookcount:any;
 value = 0;
 values=1;
 show:any;



  constructor(private bookservice:BookService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId',)
    this.getAllBook();
  }

  getAllBook() {
    let data={
      bookId:this.bookId
    }
    this.bookservice.getBookById(data).subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      console.log(this.booksArray);
      this.snack.open('get  book  Successfull', '', {
        duration: 3000,
      })
    });
  }


  addFeedback() {
    let data = {
      overallRating: this. overallRating,
      comments: this.comments,
      bookId: this.bookId,
    };
    this.bookservice.addFeedback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
        this.getFeedback();
        this.snack.open('Add feedback  Successfull', '', {
          duration: 3000,
        })
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getFeedback() {
    // console.log("feedack")
    this.bookservice.getfeedBack(this.bookId).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArr = response.response;
        console.log(this.booksArr);
        this.snack.open('Get Feedback Successfull', '', {
          duration: 3000,
        })
    });
  }


  addToBag() {
    let data = {
      bookId: this.bookId,
      orderQuantity:this.orderQuantity
    }
    this.bookservice.addToBag(data).subscribe(
      (response: any) => {
        console.log('Add to cart', response);
        this.snack.open('add to bag Successfull', '', {
          duration: 3000,
        })
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addToWishList() {
    let data = {
      bookId: this.bookId,
    }
    this.bookservice.addwishlist(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.snack.open('Add Wishlist Successfull', '', {
          duration: 3000,
        })
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
}
