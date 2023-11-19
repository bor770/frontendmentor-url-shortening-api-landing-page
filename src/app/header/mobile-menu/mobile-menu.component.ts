import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CdkMenuModule, CommonModule],
  selector: 'app-mobile-menu',
  standalone: true,
  styleUrls: ['./mobile-menu.component.css', `../../shared/styles/button.css`],
  templateUrl: './mobile-menu.component.html',
})
export class MobileMenuComponent {}
