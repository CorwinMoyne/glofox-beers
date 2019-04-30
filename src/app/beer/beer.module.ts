import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BeerComponent } from './beer.component';
import { BeerRoutingModule } from './beer.routing.module';

@NgModule({
  imports: [
    SharedModule,
    BeerRoutingModule
  ],
  declarations: [BeerComponent]
})
export class BeerModule { }
