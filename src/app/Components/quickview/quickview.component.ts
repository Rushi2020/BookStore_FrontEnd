import { Component, OnInit, VERSION } from '@angular/core';
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



  constructor(private bookservice:BookService) { }

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
    });
  }

}
