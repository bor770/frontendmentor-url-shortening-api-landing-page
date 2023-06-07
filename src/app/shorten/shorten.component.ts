import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';

import { LinksComponent } from './links/links.component';
import * as ShortenActions from './store/shorten.actions';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    LinksComponent,
  ],
  selector: 'app-shorten',
  standalone: true,
  styleUrls: ['./shorten.component.css'],
  templateUrl: './shorten.component.html',
})
export class ShortenComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
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
}
