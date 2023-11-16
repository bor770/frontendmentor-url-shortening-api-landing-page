import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, distinctUntilChanged, filter } from 'rxjs';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';

@Component({
  imports: [CommonModule, ReactiveFormsModule, LetDirective],
  selector: 'app-shorten',
  standalone: true,
  styleUrls: [
    './styles/shorten.component.css',
    `./styles/mobile.shorten.component.css`,
    `./styles/desktop.shorten.component.css`,
    `../../shared/styles/button/button.css`,
  ],
  templateUrl: './shorten.component.html',
})
export class ShortenComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  form: FormGroup;
  formSubscription: Subscription;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  ngOnInit() {
    super.ngOnInit();

    this.form = new FormGroup({
      url: new FormControl(null, Validators.required),
    });

    const form = this.form;

    form.statusChanges
      .pipe(
        distinctUntilChanged(),
        filter((status) => status === `VALID`)
      )
      .subscribe(() => {
        this.formGroupDirective.resetForm(form.value);
      });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
