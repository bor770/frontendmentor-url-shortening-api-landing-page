import { createAction, props } from '@ngrx/store';

import { Link, Links } from '../shorten.model';

export const addLink = createAction(
  `[Shorten] Add Link`,
  props<{ link: Link }>()
);
export const setLinks = createAction(
  `[Shorten] Set Links`,
  props<{ links: Links }>()
);
export const shortenLink = createAction(
  `[Shorten] Shorten Link`,
  props<{ originalLink: string }>()
);
export const linkCopied = createAction(
  `[Shorten] Copy Link`,
  props<{ index: number }>()
);
