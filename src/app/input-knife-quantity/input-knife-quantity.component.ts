import { Component, Input } from '@angular/core';
import { KnifeSpecification } from '../list-knife/Knife-specification';

@Component({
  selector: 'app-input-knife-quantity',
  templateUrl: './input-knife-quantity.component.html',
  styleUrl: './input-knife-quantity.component.scss'
})
export class InputKnifeQuantityComponent {

  @Input()

  knife!: KnifeSpecification;

  upQuantity(knife: KnifeSpecification): void{
    if(knife.quantity < knife.stock) knife.quantity++;
  }

  downQuantity(knife: KnifeSpecification): void{
    if(knife.quantity > 0)knife.quantity--;
  }
}
