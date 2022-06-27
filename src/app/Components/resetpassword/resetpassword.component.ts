import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  password:any;
  token:any

  constructor(private user:UserService,private active:ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    this.token = this.active.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  
  onsubmit(){
    let data ={
    password:this.password,
    // confirmPassword:this.confirmPassword
    }
    this.user.resetPassword(data, this.token).subscribe(
      (response: any) => {
        console.log(response);
      },
      // (error) => {
      //   console.log(error);
      // }
      );
  }

}
