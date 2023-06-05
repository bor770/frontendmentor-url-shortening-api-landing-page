import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  rootEffectsInit,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { APIResponse } from '../shorten.model';
import * as fromRoot from '../../store/root.reducer';
import * as ShortenActions from './shorten.actions';

@Injectable()
export class ShortenEffects {
  apiLink = `api.shrtco.de/v2/shorten`;

  getLinks = createEffect(() => {
    return this.actions$.pipe(
      ofType(rootEffectsInit),
      map(() =>
        ShortenActions.setLinks({
          links: JSON.parse(localStorage.getItem(`links`)),
        })
      )
    );
  });

  shortenLink = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortenActions.shortenLink),
      switchMap((shortenLinkAction) =>
        this.http
          .get<APIResponse>(`https://${this.apiLink}`, {
            params: { url: shortenLinkAction.originalLink },
          })
          .pipe(
            map((data) =>
              ShortenActions.addLink({
                link: {
                  originalLink: shortenLinkAction.originalLink,
                  shortLink: data.result.full_short_link,
                },
              })
            ),
            catchError(() => of())
          )
      )
    );
  });

  storeLinks = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ShortenActions.addLink),
        concatLatestFrom(() => this.store.select(fromRoot.selectShortenLinks)),
        tap(([, links]) => localStorage.setItem(`links`, JSON.stringify(links)))
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
