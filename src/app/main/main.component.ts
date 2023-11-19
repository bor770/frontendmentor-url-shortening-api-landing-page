import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { Feature } from './main.model';
import { GetStartedButtonComponent } from './get-started-button/get-started-button.component';
import { ShortenComponent } from './shorten/shorten.component';
import { Width } from '../shared/layout/layout.model';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    GetStartedButtonComponent,
    ShortenComponent,
  ],
  selector: 'app-main',
  standalone: true,
  styleUrls: [
    './styles/main.component.css',
    `./styles/mobile.main.component.css`,
    `./styles/desktop.main.component.css`,
  ],
  templateUrl: './main.component.html',
})
export class MainComponent extends BaseComponent {
  features: Feature[] = [
    {
      heading: `Brand Recognition`,
      text: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
    },
    {
      heading: `Detailed Records`,
      text: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    },
    {
      heading: `Fully Customizable`,
      text: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    },
  ];

  imgSrcWorking(width: Width) {
    return `../../assets/images/working-${width}.svg`;
  }

  imgSrcFeature(i: number) {
    return `../../assets/images/icon-${this.features[i].heading
      .split(` `)[0]
      .toLowerCase()}.svg`;
  }
}
