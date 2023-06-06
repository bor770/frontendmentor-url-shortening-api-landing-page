import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-main-title',
  standalone: true,
  styleUrls: ['./main-title.component.css', `../shared/styles/styles.css`],
  templateUrl: './main-title.component.html',
})
export class MainTitleComponent {}
