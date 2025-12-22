import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { JwtModule } from "@auth0/angular-jwt";


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export function tokenGetter() {
    return localStorage.getItem("jwt");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
            JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    
                },
            }),
          )
  ]
};
