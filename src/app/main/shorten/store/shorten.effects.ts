import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiResponse } from '../shorten.model';
import { environment } from '../../../../environments/environment';
import * as ShortenActions from './shorten.actions';

@Injectable()
export class ShortenEffects {
  shorten = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortenActions.shorten),
      switchMap((action) =>
        this.http
          .post<ApiResponse>(environment.apiUrl, { url: action.url })
          .pipe(
            map((response) =>
              ShortenActions.add({
                link: { original: action.url, short: response.result_url },
              })
            ),
            catchError(() => of())
          )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
