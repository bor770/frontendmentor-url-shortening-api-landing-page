import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, distinctUntilChanged, filter } from 'rxjs';

import { LetDirective } from '@ngrx/component';

import { BaseComponent } from '../../shared/base/base.component';
import { Link } from './shorten.model';
import * as ShortenActions from './store/shorten.actions';
import * as ShortenSelectors from './store/shorten.selectors';

@Component({
  imports: [ClipboardModule, CommonModule, ReactiveFormsModule, LetDirective],
  selector: 'app-shorten',
  standalone: true,
  styleUrls: [
    './styles/shorten.component.css',
    `./styles/mobile.shorten.component.css`,
    `./styles/desktop.shorten.component.css`,
    `../../shared/styles/button.css`,
  ],
  templateUrl: './shorten.component.html',
})
export class ShortenComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  copied$: Observable<number>;
  form: FormGroup;
  links$: Observable<Link[]>;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  private formSubscription: Subscription;

  ngOnInit() {
    super.ngOnInit();

    const store = this.store;

    this.copied$ = store.select(ShortenSelectors.selectCopied);
    this.links$ = store.select(ShortenSelectors.selectLinks);

    this.initForm();
  }

  onSubmit() {
    const form = this.form;

    if (form.valid) {
      this.store.dispatch(ShortenActions.shorten({ url: form.value.url }));
      this.formGroupDirective.resetForm();
    }
  }

  buttonText(copied: number, i: number) {
    return copied === i ? `Copied!` : `Copy`;
  }

  onCopy(i: number) {
    this.store.dispatch(ShortenActions.copy({ index: i }));
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  private initForm() {
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
}
