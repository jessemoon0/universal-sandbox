import {
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { translocoHttpLoader } from './services';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        fallbackLang: 'en',
        flatten: {
          aot: environment.production
        },
        missingHandler: {
          logMissingKey: true
        },
        prodMode: environment.production,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true
      })
    },
    translocoHttpLoader
  ]
})
export class TranslocoRootModule {}
