import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BeerComponent } from './beer.component';
import { BeerRoutingModule } from './beer.routing.module';
import { RandomBeerComponent } from './random-beer/random-beer.component';


@NgModule({
  imports: [
    SharedModule,
    BeerRoutingModule
  ],
  declarations: [
    BeerComponent,
    RandomBeerComponent
  ]
})
export class BeerModule { }
