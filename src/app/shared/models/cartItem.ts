import { foods } from "./food";

export class CartItem{
    food!:foods;
    quantity:number=1;
    getPrice():number{
        return this.food.price * this.quantity;
    }
    constructor(food:foods){
        this.food=food;
    }
}