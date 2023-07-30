import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodService } from './services/food/food.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartService } from './services/cart.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { PayComponent } from './pay/pay.component';
import { TransferService } from './transfer.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotfoundComponent,
    PayComponent,
    LoginComponent,
    SignupComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FoodService,CartService,TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
