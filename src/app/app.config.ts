import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LayoutEffects } from './shared/layout/store/layout.effects';
import { ShortenEffects } from './main/shorten/store/shorten.effects';
import { rootReducer } from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(LayoutEffects, ShortenEffects),
    provideHttpClient(),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
