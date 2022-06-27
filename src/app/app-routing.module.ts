import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';

const routes: Routes = [
{path:'login',component:LoginComponent },
{path: 'signup',component:SignupComponent},
{path: 'forgotpassword' , component:ForgotpasswordComponent},
{path: 'resetpassword',component:ResetpasswordComponent},
{path: 'dashboard',component:DashboardComponent,
 children:[
  { path:'', redirectTo:"/dashboard/getallbooks", pathMatch:'full'},
  {path:'getallbooks',component:GetallbooksComponent},
]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }