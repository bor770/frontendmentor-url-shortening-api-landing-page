import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-started-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-started-button.component.html',
  styleUrls: [
    './get-started-button.component.css',
    `../../shared/styles/button/button.css`,
  ],
})
export class GetStartedButtonComponent {}
