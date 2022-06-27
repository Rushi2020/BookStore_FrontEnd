import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  emailId:any
  password:any
  token:any
  // MailId:any
  
  constructor(private formbuilder: FormBuilder,private route:Router, private user:UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      emailId: ['', Validators.required],
      password: ['', Validators.required],
      // selectoption: ['', Validators.required],

    })
  }

  onSubmit() {
    this.submitted = true;
    console.log("inside submit");
    if(this.loginForm.valid)
  {
      console.log("valid data", this.loginForm.value);
      let data = {
        
        emailId:this.loginForm.value.emailId,

        password:this.loginForm.value.password,
      }
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token',res.message)
      })
  }
  else
  {
    console.log("Invalid data", this.loginForm.value);
  }
}


}
