import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Width } from '../layout/layout.model';
import * as LayoutSelectors from '../layout/store/layout.selectors';

@Component({
  imports: [CommonModule],
  selector: 'app-base',
  standalone: true,
  styleUrl: './base.component.css',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  width$: Observable<Width>;

  constructor(public store: Store) {}

  ngOnInit(): void {
    this.width$ = this.store.select(LayoutSelectors.selectState);
  }
}
