import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Feature } from '../features.data';

@Component({
  imports: [CommonModule],
  selector: 'app-feature',
  standalone: true,
  styleUrls: ['./feature.component.css'],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  @Input() feature: Feature;
}
