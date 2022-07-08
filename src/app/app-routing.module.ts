import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { MycartComponent } from './Components/mycart/mycart.component';
import { OrderlistComponent } from './Components/orderlist/orderlist.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrdersuccessComponent } from './Components/ordersuccess/ordersuccess.component';

const routes: Routes = [
{path:'login',component:LoginComponent },
{path: 'signup',component:SignupComponent},
{path: 'forgotpassword' , component:ForgotpasswordComponent},
{path: 'resetpassword',component:ResetpasswordComponent},
{path: 'dashboard',component:DashboardComponent,
 children:[
    { path:'', redirectTo:"/dashboard/getallbooks", pathMatch:'full'},
    {path:'getallbooks',component:GetallbooksComponent},
    {path :'quickview',component:QuickviewComponent},
    {path:'mycart',component:MycartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'orderlist',component:OrderlistComponent},
    {path:'ordersuccess',component:OrdersuccessComponent}
]

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
