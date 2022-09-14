import { Component, OnInit } from '@angular/core';
import * as configcat from 'configcat-js';

import { ampli } from '../../ampli'


@Component({
  selector: 'app-site-main',
  templateUrl: './site-main.component.html',
  styleUrls: ['./site-main.component.css']
})
export class SiteMainComponent implements OnInit {
  canShowGreenPricingBadge:boolean = false;

  handleProPlanClick() {
    ampli.proPlanClick();
  }

  constructor() {
    let configCatClient = configcat.createClient("eJPaCHq8NEKIV0SCfou-qQ/lg7L5k7AeEu1A9P0EvB6xA");
    configCatClient.getValueAsync("canshowgreenpricingbadge", false)
    .then(value => {
      this.canShowGreenPricingBadge = value;
    })

    ampli.load({environment: 'production'})


   }

  ngOnInit(): void {
  }


}
