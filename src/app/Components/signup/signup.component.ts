import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder,private user:UserService, ) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      // selectoption: ['', Validators.required],
    })
  }

  onSubmit(){
    console.log("inside submit");
    if(this.signupForm.valid){
    console.log("valid data", this.signupForm.value)
    let data={
      fullName:this.signupForm.value.fullName,
      emailId:this.signupForm.value.emailId,
      password:this.signupForm.value.password,
      mobileNumber:this.signupForm.value.mobileNumber,

  }
  this.user.register(data).subscribe((res:any)=>{
    console.log(res)
  })
}
 else{
  console.log("Invalid data", this.signupForm.value);
 }
}
}
