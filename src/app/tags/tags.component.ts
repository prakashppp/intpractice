import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input() foodPageTags?:string[];
    tags:Tag[]=[];
    constructor(private fs:FoodService){
    }

    ngOnInit(){
      if(!this.foodPageTags)
      this.tags=this.fs.getAllTag();
    }

    // getAllTag():Tag[]{
    //   return [
    //     { name: 'All', count:8},
    //     { name: 'Breakfast', count:2},
    //     { name: 'Lunch', count:5},
    //     { name: 'Dinner', count:5},
    //     { name: 'FastFood', count:4}
    //   ]
    // }
}
