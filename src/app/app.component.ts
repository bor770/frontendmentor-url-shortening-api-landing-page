import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HeaderComponent } from './header/header.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { ShortenComponent } from './shorten/shorten.component';

@Component({
  imports: [
    CommonModule,
    FeaturesComponent,
    FooterComponent,
    GetStartedComponent,
    HeaderComponent,
    MainTitleComponent,
    ShortenComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'url-shortening-api-landing-page';
}
