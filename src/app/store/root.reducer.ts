import { ActionReducerMap } from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromShorten from '../main/shorten/store/shorten.reducer';

interface RootState {
  layout: fromLayout.State;
  shorten: fromShorten.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  layout: fromLayout.reducer,
  shorten: fromShorten.reducer,
};
