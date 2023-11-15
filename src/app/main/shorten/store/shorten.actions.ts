import { createAction, props } from '@ngrx/store';

import { Link } from '../shorten.model';

export const add = createAction(`[Shorten] Add`, props<{ link: Link }>());

export const copy = createAction(`[Shorten] Copy`, props<{ index: number }>());

export const shorten = createAction(
  `[Shorten] Shorten`,
  props<{ url: string }>()
);
