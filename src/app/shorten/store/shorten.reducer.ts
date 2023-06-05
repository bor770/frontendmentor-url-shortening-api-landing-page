import { createReducer, on } from '@ngrx/store';

import { Links } from '../shorten.model';
import * as ShortenActions from './shorten.actions';

export interface State {
  copied: number;
  links: Links;
}

const initalState: State = { copied: null, links: [] };

export const shortenReducer = createReducer(
  initalState,
  on(
    ShortenActions.addLink,
    (state, { link }): State => ({ ...state, links: [...state.links, link] })
  ),
  on(
    ShortenActions.setLinks,
    (state, { links }): State => ({ ...state, links: [...(links ?? [])] })
  ),
  on(
    ShortenActions.linkCopied,
    (state, { index }): State => ({ ...state, copied: index })
  )
);

export const selectCopied = (state: State) => state.copied;
export const selectLinks = (state: State) => state.links;
