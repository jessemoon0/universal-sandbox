import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRootComponent } from './sandbox-root/sandbox-root.component';
import { SandboxComponent } from './sandbox-root/sandbox/sandbox.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { TranslocoRootModule } from '../transloco/transloco-root.module';

@NgModule({
  declarations: [SandboxRootComponent, SandboxComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    TranslocoRootModule
  ]
})
export class SandboxModule { }
