import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/Book service/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishArray:any;
  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this. getAllwishlist();
  }

  getAllwishlist(){
    this.bookservice.getAllwishlist().subscribe((response: any) => {
      console.log(response);
      this.wishArray = response.response; 
      console.log(this.wishArray);
     
    });
  }
  
  removewishlist(wishlistId:any){
    let reqdata={
      wishListId:wishlistId
    }
    this.bookservice.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this. getAllwishlist();
     
    });
  }
}
