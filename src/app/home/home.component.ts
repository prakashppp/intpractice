import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { StarRatingComponent } from 'ng-starrating'
import { ActivatedRoute } from '@angular/router';
import { foods } from '../shared/models/food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fs: FoodService, private router: ActivatedRoute) { }


  foods: foods[] = [];
  sss: string = "";

  ngOnInit() {


    this.router.params.subscribe(params => {
      if (params['searchItem']) {

        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        if (this.foods.length == 0)
          this.sss = "" + params['searchItem'];
        else
          this.sss = "";
      }

      else if (params['tag'] == 'All')
        this.foods = this.fs.getAll()
      else if (params['tag'])
        this.foods = this.fs.getAll().filter(food => food.tags?.includes(params['tag']))
        //this.foods=this.fs.getAllFoodByTag(params['tag']);

      else
        this.foods = this.fs.getAll();
    })

  }

}
