import { createAction, props } from '@ngrx/store';

import { Link, Links } from '../shorten.model';

export const addLink = createAction(
  `[Shorten] Add Link`,
  props<{ link: Link }>()
);
export const copyLink = createAction(
  `[Shorten] Copy Link`,
  props<{ index: number }>()
);
export const setLinks = createAction(
  `[Shorten] Set Links`,
  props<{ links: Links }>()
);
