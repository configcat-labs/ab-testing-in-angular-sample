import { Component, inject, OnInit, signal } from '@angular/core';
import {NgClass} from '@angular/common';
import {ConfigCatService} from '../services/configcat.service';
import {AmplitudeService} from '../services/amplitude.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-site-main',
  imports: [
    NgClass
  ],
  templateUrl: './site-main.component.html',
  standalone: true,
  styleUrl: './site-main.component.scss'
})
export class SiteMainComponent implements OnInit {
  private configCatService = inject(ConfigCatService);
  readonly connectionState = this.configCatService.connectionState();
  isGreenPricingBadgeEnabled = this.configCatService.getValue('greenPricingBadge', false)

  constructor(
    private amplitudeService: AmplitudeService){}

  async ngOnInit() {
    this.amplitudeService.initialize(environment.amplitudeApiKey);
  }


  handleProPlanClick(badgeColor: string) {
    this.amplitudeService.trackEvent('ProPlanClick', { badgeColor: badgeColor });
    window.alert(`Pro plan: ${badgeColor}`);
  }
}
