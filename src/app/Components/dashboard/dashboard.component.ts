import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  badgecount: any; // done for badge count
  fullName: any;
  isSearch = false; 

  constructor(private route:Router, private dataservice:DataService) { 
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit(): void {
  }

  getMyOrders(){}

  clearFilter(search: any) {  // This is done for search pipe part in getallbooks and dashboard
    console.log(search);  //this .target.value is coming from console
    this.dataservice.sendData(search) // done for search pipe & this .target.value is coming from console
  }

  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  getcart()
  {
    this.route.navigateByUrl("/dashboard/mycart")
  }

}
