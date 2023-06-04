import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  rootEffectsInit,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';

import * as fromRoot from '../../store/root.reducer';
import * as ShortenActions from './shorten.actions';

@Injectable()
export class ShortenEffects {
  fetchLinks = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      map(() =>
        ShortenActions.setLinks({
          links: JSON.parse(localStorage.getItem(`links`)),
        })
      )
    );
  });

  addLink = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ShortenActions.addLink),
        concatLatestFrom(() => this.store.select(fromRoot.selectShortenLinks)),
        tap(([, links]) => localStorage.setItem(`links`, JSON.stringify(links)))
      );
    },
    { dispatch: false }
  );

  copyLink = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ShortenActions.copyLink),
        concatLatestFrom(() => this.store.select(fromRoot.selectShortenCopied)),
        tap
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
