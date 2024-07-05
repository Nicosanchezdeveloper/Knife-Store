import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInformation: string[] = ["Name", "Email", "Blade Length", "Overall Length",  "Weight", "Blade Material", "Handle Material", "Blade Type", "Locking Mechanism", "Edge Type", "Blade Thickness"]; 
}
