import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromShorten from '../shorten/store/shorten.reducer';

interface State {
  shorten: fromShorten.State;
}

export const reducers: ActionReducerMap<State> = {
  shorten: fromShorten.shortenReducer,
};

const selectShorten = createFeatureSelector<fromShorten.State>(`shorten`);

export const selectShortenLinks = createSelector(
  selectShorten,
  fromShorten.selectLinks
);
export const selectShortenCopied = createSelector(
  selectShorten,
  fromShorten.selectCopied
);
