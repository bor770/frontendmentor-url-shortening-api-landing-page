import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../shared/base/base.component';
import { GetStartedButtonComponent } from './get-started-button/get-started-button.component';
import { Width } from '../shared/layout/layout.model';

@Component({
  imports: [CommonModule, LetDirective, GetStartedButtonComponent],
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
  imgSrcCloud(width: Width) {
    return `url(../../assets/images/cloud-${width}.svg)`;
  }

  imgSrcWorking(width: Width) {
    return `../../assets/images/working-${width}.svg`;
  }
}
