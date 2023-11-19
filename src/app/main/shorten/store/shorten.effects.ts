import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import * as ShortenActions from './shorten.actions';
import * as ShortenSelectors from './shorten.selectors';

@Injectable()
export class ShortenEffects {
  shorten = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortenActions.shorten),
      switchMap((action) =>
        this.http
          .get(`${environment.apiUrl}${action.url}`, { responseType: `text` })
          .pipe(
            map((response) =>
              ShortenActions.add({
                link: { original: action.url, short: response },
              })
            ),
            catchError(() => of())
          )
      )
    );
  });

  add = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ShortenActions.add),
        concatLatestFrom(() => this.store.select(ShortenSelectors.selectLinks)),
        tap(([, links]) => {
          localStorage.setItem(`links`, JSON.stringify(links));
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}
}
