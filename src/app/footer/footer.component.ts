import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { LinkCategory } from './footer.model';
import { PinterestComponent } from './pinterest/pinterest.component';
import { TwitterComponent } from './twitter/twitter.component';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    FacebookComponent,
    InstagramComponent,
    PinterestComponent,
    TwitterComponent,
  ],
  selector: 'app-footer',
  standalone: true,
  styleUrls: [
    './styles/footer.component.css',
    `./styles/mobile.footer.component.css`,
    `./styles/desktop.footer.component.css`,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent extends BaseComponent {
  icons = [`facebook`, `twitter`, `pinterest`, `instagram`];
  links: LinkCategory[] = [
    {
      heading: `Features`,
      links: [`Link Shortening`, `Branded Links`, `Analytics`],
    },
    { heading: `Resources`, links: [`Blog`, `Developers`, `Support`] },
    { heading: `Company`, links: [`About`, `Our Team`, `Careers`, `Contact`] },
  ];

  imgSrcIcon(icon: string) {
    return `../../assets/images/icon-${icon}.svg`;
  }
}
