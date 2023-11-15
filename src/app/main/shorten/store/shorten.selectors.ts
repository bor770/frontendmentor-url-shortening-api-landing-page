import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromShorten from './shorten.reducer';

const selectState = createFeatureSelector<fromShorten.State>(`shorten`);

export const selectCopied = createSelector(
  selectState,
  (state) => state.copied
);

export const selectLinks = createSelector(selectState, (state) => state.links);
