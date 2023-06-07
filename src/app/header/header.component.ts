import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable, map } from 'rxjs';

import { MenuComponent } from './menu/menu.component';

@Component({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MenuComponent],
  selector: 'app-header',
  standalone: true,
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isXSmall$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isXSmall$ = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((result) => result.matches));
  }
}
