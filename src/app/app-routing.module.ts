import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PayComponent } from './pay/pay.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin-login', component:AdminLoginComponent },
  {path:'home', component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'pay', component:PayComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
