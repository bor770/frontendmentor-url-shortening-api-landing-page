import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

const TRANSLATE_X_ARGUMENT = `calc(100% + 1.5rem)`;

@Component({
  animations: [
    trigger(`menu`, [
      state(`in`, style({ transform: `translateX(0)` })),
      transition(`void => *`, [
        style({ transform: `translateX(${TRANSLATE_X_ARGUMENT})` }),
        animate(500),
      ]),
      transition(`* => void`, [
        animate(
          500,
          style({ transform: `translateX(${TRANSLATE_X_ARGUMENT})` })
        ),
      ]),
    ]),
  ],
  imports: [CdkMenuModule, CommonModule, LetDirective, MobileMenuComponent],
  selector: 'app-header',
  standalone: true,
  styleUrls: [
    './styles/header.component.css',
    `./styles/mobile.header.component.css`,
    `./styles/desktop.header.component.css`,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  links = [`features`, `pricing`, `resources`, `login`, `sign up`];
  position: ConnectedPosition[] = [
    {
      offsetY: 23.33,
      originX: `end`,
      originY: `bottom`,
      overlayX: `end`,
      overlayY: `top`,
    },
  ];

  liClass(link: string) {
    return link.split(` `).join(`-`);
  }

  aClass(link: string) {
    return `${this.liClass(link)}-link`;
  }
}
