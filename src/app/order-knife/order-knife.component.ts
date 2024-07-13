import { Component } from '@angular/core';

@Component({
  selector: 'app-order-knife',
  templateUrl: './order-knife.component.html',
  styleUrl: './order-knife.component.scss'
})
export class OrderKnifeComponent {
  contactInformation: string[] = ["Name", "Email", "Blade Length", "Overall Length",  "Weight", "Blade Material", "Handle Material", "Blade Type", "Locking Mechanism", "Edge Type", "Blade Thickness"]; 
}
