import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MenuComponent } from './menu/menu.component';

@Component({
  imports: [CommonModule, MatToolbarModule, MenuComponent],
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
