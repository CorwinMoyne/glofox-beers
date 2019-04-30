import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreModule { }
