import { NgModule } from '@angular/core';
import { TranslocoRootModule } from '../transloco/transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ]
})
export class CoreModule { }
