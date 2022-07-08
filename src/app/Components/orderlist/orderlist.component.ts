import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/Book service/book.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  orderArray:any;
  // BooksArray:any;
  

  constructor(private bookservice:BookService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllorder()
  }
  getAllorder() {
    this.bookservice.getAllorder().subscribe((response: any) => {
      console.log(response);
      this.orderArray = response.response;
      console.log(this.orderArray);
      this.snack.open('get All order Successfull', '', {
        duration: 3000,
      });
    });
  }

}
