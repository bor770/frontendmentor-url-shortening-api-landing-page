import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { links, socialIcons } from './links';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  links = links;
  socialIcons = socialIcons;
}
