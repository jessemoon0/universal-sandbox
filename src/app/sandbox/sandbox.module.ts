import { NgModule } from '@angular/core';
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { TranslocoLanguageModule } from '../transloco/transloco-language/transloco-language.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SandboxRootComponent, SandboxComponent],
  imports: [
    SharedModule,
    SandboxRoutingModule,
    TranslocoLanguageModule
  ]
})
export class SandboxModule { }
