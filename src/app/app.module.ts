import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
// import {flexLayoutModule} 
import {MatIconModule} from '@angular/material/icon';
 import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './Components/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MycartComponent } from './Components/mycart/mycart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderlistComponent } from './Components/orderlist/orderlist.component';
import { OrdersuccessComponent } from './Components/ordersuccess/ordersuccess.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
// import { SignupComponent } from './Components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetallbooksComponent,
    QuickviewComponent,
    MycartComponent,
    WishlistComponent,
    OrderlistComponent,
    OrdersuccessComponent,
    // SignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MatToolbarModule,
    AppRoutingModule,
    MatInputModule,
     FlexLayoutModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,MatSnackBarModule,
    MatSelectModule,MatRadioModule,
    HttpClientModule,NgbModule ,
    // ActivatedRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
