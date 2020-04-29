import {
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { TranslocoLanguageChangerComponent } from './transloco-language-changer/transloco-language-changer.component';
import { translocoHttpLoader } from './services/transloco-http-loader.service';

@NgModule({
  declarations: [TranslocoLanguageChangerComponent],
  exports: [ TranslocoModule, TranslocoLanguageChangerComponent ],
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
