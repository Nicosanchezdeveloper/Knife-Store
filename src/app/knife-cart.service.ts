import { Injectable } from '@angular/core';
import { ListKnifeComponent } from './list-knife/list-knife.component';
import { KnifeSpecification } from './list-knife/Knife-specification';

@Injectable({
  providedIn: 'root'
})
export class KnifeCartService {
  public cartList: KnifeSpecification [] = [];

  constructor() { }

  
  addToCart(knife: KnifeSpecification) {
    this.cartList.push(knife);
    console.log(this.cartList.length, this.cartList);
  }


}
