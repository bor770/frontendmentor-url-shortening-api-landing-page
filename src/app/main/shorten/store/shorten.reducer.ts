import { createReducer, on } from '@ngrx/store';

import { Link } from '../shorten.model';
import * as ShortenActions from './shorten.actions';

export interface State {
  copied: number;
  links: Link[];
}

const initalState: State = { copied: null, links: [] };

export const reducer = createReducer(
  initalState,
  on(
    ShortenActions.add,
    (state, action): State => ({
      ...state,
      links: [...state.links, action.link],
    })
  ),
  on(
    ShortenActions.copy,
    (state, action): State => ({ ...state, copied: action.index })
  )
);
