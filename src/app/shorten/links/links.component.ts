import { ClipboardModule } from '@angular/cdk/clipboard';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { Links } from '../shorten.model';
import * as fromRoot from '../../store/root.reducer';
import * as ShortenActions from '../store/shorten.actions';

@Component({
  imports: [CommonModule, ClipboardModule, MatButtonModule, MatDividerModule],
  selector: 'app-links',
  standalone: true,
  styleUrls: ['./links.component.css'],
  templateUrl: './links.component.html',
})
export class LinksComponent implements OnInit {
  copied$: Observable<number>;
  links$: Observable<Links>;

  isMinLarge$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.copied$ = this.store.select(fromRoot.selectShortenCopied);
    this.links$ = this.store.select(fromRoot.selectShortenLinks);

    this.isMinLarge$ = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches));
  }

  onCopy(index: number) {
    this.store.dispatch(ShortenActions.linkCopied({ index }));
  }
}
