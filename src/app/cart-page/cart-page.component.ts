import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent{
    cart!:Cart;
    
          
    constructor(private cs:CartService,public t:TransferService){
        this.setCart();
        this.t.setCount(this.cart.items.length);
        this.t.getPrice(this.cart.totalPrice());
    }

    setCart(){
      this.cart = this.cs.getCart();
      this.t.setCount(this.cart.items.length);
      this.t.getPrice(this.cart.totalPrice());
    }

    removeFromCart(cartItem:CartItem){
      this.cs.removeFromCart(cartItem.food.id);
      this.setCart();
    }

    changeQuantity(foodid:number, quantityInString:string){
      const quantity = parseInt(quantityInString);
      this.cs.changeQuantity(foodid,quantity);
      this.setCart();
    }

  
}
