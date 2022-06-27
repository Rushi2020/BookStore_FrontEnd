import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  email:any;
  
  constructor(private user:UserService) { }

  ngOnInit(): void {
  
  }
  onSubmit() {
    
    let data={
      email:this.email,
    
    }
    console.log(data.email)
    this.user.forgetPassword(data).subscribe((response:any)=>{
      console.log(response);
    })
      
  }

}
