import { ClipboardModule } from '@angular/cdk/clipboard';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';

import { Links } from './shorten.model';
import * as fromRoot from '../store/root.reducer';
import * as ShortenActions from './store/shorten.actions';

@Component({
  imports: [
    CommonModule,
    ClipboardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'app-shorten',
  standalone: true,
  styleUrls: ['./shorten.component.css'],
  templateUrl: './shorten.component.html',
})
export class ShortenComponent implements OnInit {
  form: FormGroup;

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

    this.form = new FormGroup({
      originalLink: new FormControl(null, Validators.required),
    });
  }

  onShorten() {
    if (this.form.valid) {
      this.store.dispatch(
        ShortenActions.shortenLink({
          originalLink: this.form.value.originalLink,
        })
      );
    }
  }

  onCopy(index: number) {
    this.store.dispatch(ShortenActions.linkCopied({ index }));
  }
}
