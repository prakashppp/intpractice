import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
}
