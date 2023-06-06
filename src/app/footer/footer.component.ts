import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

import { links, socialIcons } from './links';

@Component({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  selector: 'app-footer',
  standalone: true,
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  links = links;
  socialIcons = socialIcons;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    for (const icon of this.socialIcons) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `../../assets/images/icon-${icon}.svg`
        )
      );
    }
  }
}
