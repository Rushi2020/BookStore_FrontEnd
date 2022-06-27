import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/Services/data service/data.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {

  constructor(private route:Router,private activateroute:ActivatedRoute,private dataservice:DataService) { }

  ngOnInit(): void {
  }



  showDescription(bookId:number){
  //   this.router.navigate([`dashboard/bookdetails`]);
  }
 
  lowtohigh(){
  //   this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice); //.price is coming from backend api
  }
  hightolow(){
  //   this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
  //   this.booksArray.reverse();
  }
}
