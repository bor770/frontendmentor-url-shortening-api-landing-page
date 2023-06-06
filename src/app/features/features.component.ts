import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { features } from './features.data';
import { FeatureComponent } from './feature/feature.component';

@Component({
  imports: [CommonModule, FeatureComponent],
  selector: 'app-features',
  standalone: true,
  styleUrls: ['./features.component.css'],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {
  features = features;
}
