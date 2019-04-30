import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreModule { }
