import { Component } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  totala:any;
  
  constructor(public t:TransferService){}

  ngOnInit(){
    this.t.total.subscribe(data=>{
      this.totala=data;
      console.log(this.totala)
     })
  }

}
