import { Component } from '@angular/core';
import { AboutKnife } from './AboutKnife';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title: string = "Understanding Knives";

  aboutInformation: AboutKnife[] = [
    {
      title: "Blade Length",
      description: "The length of the blade can impact its usability. Shorter blades (under 3 inches) are ideal for precision tasks and are easier to carry, while longer blades (over 4 inches) provide more cutting power and are suitable for heavy-duty tasks.",
      points: []
    },
    {
      title: "Blade Material",
      description: "The material of the blade determines its sharpness, durability, and resistance to rust. Common materials include:",
      points: ["Stainless Steel: Corrosion-resistant and easy to maintain, ideal for general use.", "Carbon Steel: Known for its sharpness and edge retention but requires regular maintenance to prevent rust.", "Tool Steel: Highly durable and retains sharpness, perfect for heavy-duty tasks."]
    },
    {
      title: "Handle Material",
      description: "The handle material affects the grip and comfort of the knife. Popular materials include:",
      points: ["G10: A durable and lightweight composite material.", "Micarta: Offers excellent grip, even when wet.", "Wood: Provides a classic look and comfortable grip but requires maintenance."]
    },
    {
      title: "Blade Type",
      description: "Different blade types serve various purposes:",
      points: ["Drop Point: Versatile and popular for general use.", "Clip Point: Ideal for piercing and detailed work.", "Tanto: Strong tip for piercing tough materials."]
    },
  ];
}