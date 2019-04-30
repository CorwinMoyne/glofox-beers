import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [RouterModule],
  declarations: [CoreComponent]
})
export class CoreModule { }
