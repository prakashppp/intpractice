import { Component, OnInit } from '@angular/core';
import { foods } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:foods;
  constructor(private route:ActivatedRoute, private fs:FoodService, private cs:CartService, private router:Router){

    route.params.subscribe(params=>{
      if(params['id'])
      this.food=fs.getFoodById(params['id'])
    })
  }
 
  ngOnInit(){
  }

  addToCart(){
    this.cs.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
   }
}
