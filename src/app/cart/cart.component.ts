import { Component, OnInit } from '@angular/core';
import { KnifeCartService } from '../knife-cart.service';
import { ListKnifeComponent } from '../list-knife/list-knife.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit  {

  constructor(public cart: KnifeCartService) {
   
  }

  ngOnInit(): void {

  }
}
