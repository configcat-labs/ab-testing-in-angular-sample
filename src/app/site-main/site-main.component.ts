import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-site-main',
  imports: [
    NgClass
  ],
  templateUrl: './site-main.component.html',
  styleUrl: './site-main.component.scss'
})
export class SiteMainComponent {
  isGreenPricingBadgeEnabled: boolean = false;

  handleProPlanClick() {
    console.log('Pro plan clicked');
  }
}
