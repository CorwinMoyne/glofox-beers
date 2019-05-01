import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BeerComponent } from './beer.component';
import { BeerRoutingModule } from './beer.routing.module';
import { PaginateBeerComponent } from './paginate-beer/paginate-beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SearchBeerComponent } from './search-beer/search-beer.component';

@NgModule({
  imports: [
    SharedModule,
    BeerRoutingModule
  ],
  declarations: [
    BeerComponent,
    RandomBeerComponent,
    SearchBeerComponent,
    PaginateBeerComponent
  ]
})
export class BeerModule { }
