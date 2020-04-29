import { Injectable } from '@angular/core';
import { Translation, TRANSLOCO_LOADER, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslocoHttpLoaderService implements TranslocoLoader {


  constructor(private http: HttpClient) {}

  public getTranslation(lang: string) {
    return this.http.get<Translation>(`${environment.translocoUrl}/assets/i18n/${lang}.json`);
  }
}

export const translocoHttpLoader = { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoaderService };
