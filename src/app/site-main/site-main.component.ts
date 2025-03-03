import { Component, OnInit } from '@angular/core';
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
  isGreenPricingBadgeEnabled: boolean = false;

  constructor(
    private amplitudeService: AmplitudeService,
    private configCatService: ConfigCatService) {

  }

  async ngOnInit() {
    this.amplitudeService.initialize(environment.amplitudeApiKey);
    await this.configCatService.initialize({
      sdkKey: environment.configCatSDKKey,
    });
    this.isGreenPricingBadgeEnabled = await this.configCatService.getFeatureFlag('greenPricingBadge');
  }


  handleProPlanClick(badgeColor: string) {
    this.amplitudeService.trackEvent('ProPlanClick', { badgeColor: badgeColor });
    window.alert(`Pro plan: ${badgeColor}`);
  }
}
