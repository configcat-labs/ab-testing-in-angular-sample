import { Component } from '@angular/core';
import {SiteHeaderComponent} from './site-header/site-header.component';
import {SiteNavigationComponent} from './site-navigation/site-navigation.component';
import {SiteMainComponent} from './site-main/site-main.component';
import {SiteFooterComponent} from './site-footer/site-footer.component';
// Import Amplitude service

@Component({
  selector: 'app-root',
  imports: [SiteHeaderComponent, SiteNavigationComponent, SiteMainComponent, SiteFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ab-testing-in-angular-sample';
}

