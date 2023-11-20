import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { LayoutEffects } from './shared/layout/store/layout.effects';
import { ShortenEffects } from './main/shorten/store/shorten.effects';
import { rootReducer } from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(LayoutEffects, ShortenEffects),
    provideHttpClient(),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true}),
  ],
};
