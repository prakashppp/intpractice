import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):foods{
    return this.getAll().find(food=> food.id==id)!
    // return this.getAll().filter(food=>food.id===id);

  }

  getAllFoodByTag(tag:string): foods[] {
    if(tag=='All')
    return this.getAll();
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
  }

  // Use this to display on HTML file
  getAllTag():Tag[]{
    return [
      { name: 'All', count:8},
      { name: 'Breakfast', count:2},
      { name: 'Lunch', count:5},
      { name: 'Dinner', count:5},
      { name: 'FastFood', count:4}
    ]
  }

  getAll():foods[]{
    return [
      {
        id: 1,
        name: 'Veg Biryani',
        cookTime: '10-15',
        price: 120,
        favourite: true,
        origins:['Hydrabadi'],
        star:4.5,
        imageUrl:'assets/food1.jpeg',
        tags:['Dinner','Lunch']
      },

      {
        id: 2,
        name: 'Chapati Bhaji',
        cookTime: '20-25',
        price: 80,
        favourite: false,
        origins:['Maharshtrian'],
        star:5,
        imageUrl:'assets/food2.jpeg',
        tags:['Lunch','Dinner']
      },

      {
        id: 3,
        name: 'Idli Dosa',
        cookTime: '10',
        price: 100,
        favourite: true,
        origins:['Karnataka, Tamilnadu'],
        star:4,
        imageUrl:'assets/food3.jpeg',
        tags:['FastFood','Breakfast']
      },

      {
        id: 4,
        name: 'Mixed',
        cookTime: '20-25',
        price: 200,
        favourite: false,
        origins:['Indian'],
        star:4,
        imageUrl:'assets/food4.jpeg',
        tags:['FastFood','Breakfast']
      },

      {
        id: 5,
        name: 'Pani Puri',
        cookTime: '10',
        price: 40,
        favourite: false,
        origins:['Indian'],
        star:4.5,
        imageUrl:'assets/food5.jpeg',
        tags:['FastFood']
      },

      {
        id: 6,
        name: 'Panner Tika',
        cookTime: '30',
        price: 160,
        favourite: false,
        origins:['Maharashtrian'],
        star:4.5,
        imageUrl:'assets/food6.jpeg',
        tags:['Dinner','Lunch']
      },

      {
        id: 7,
        name: 'Puri Bhaji',
        cookTime: '20-25',
        price: 100,
        favourite: false,
        origins:['Maharashtrian'],
        star:5,
        imageUrl:'assets/food7.jpeg',
        tags:['Dinner','Lunch']
      },

      {
        id: 8,
        name: 'Thali',
        cookTime: '40',
        price: 220,
        favourite: false,
        origins:['Indian'],
        star:4.5,
        imageUrl:'assets/food8.jpeg',
        tags:['FastFood','Lunch','Dinner']
      }
      
    ]
  }
}