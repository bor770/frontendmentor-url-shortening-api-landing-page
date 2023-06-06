import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [CommonModule, MatButtonModule],
  selector: 'app-get-started',
  standalone: true,
  styleUrls: ['./get-started.component.css'],
  templateUrl: './get-started.component.html',
})
export class GetStartedComponent {}
