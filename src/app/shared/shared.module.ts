import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [CommonModule, FlexLayoutModule, TranslocoModule]
})
export class SharedModule { }
