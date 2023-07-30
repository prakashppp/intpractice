import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from './shared/models/datav';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  cartcount=new Subject();
  total=new Subject();
  constructor() { }

  setCount(count:any){
    this.cartcount.next(count);
  }

  getPrice(n:any){
    this.total.next(n);
  }

  getall():data[]{
    return this.logindata;
  }
  
  
  logindata:data[]=[
      {email:'prakash@gmail.com',password:'punam'},
      {email:'punam@gmail.com',password:'prakash'},
      {email:'krishn@gmail.com',password:'radha'}
  ]
  
  add(data:data){
  this.logindata.push(data);
  console.log(this.logindata);
  }
}
