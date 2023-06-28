import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  totala:any;
  
  constructor(public t:TransferService){}

  ngOnInit(){
    this.t.total.subscribe(data=>{
      this.totala=data;
      console.log(this.totala)
     })
  }
      
}
