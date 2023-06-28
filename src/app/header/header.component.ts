import { Component} from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  count:any;
  
  constructor(public t:TransferService){
      
    }

  ngOnInit(){
     this.t.cartcount.subscribe(data=> {
      this.count=data;
     })

  }
  
}
