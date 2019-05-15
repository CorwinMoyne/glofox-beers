import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { BeerComponent } from './beer.component';
import { BeerRoutingModule } from './beer.routing.module';
import { PaginateBeerComponent } from './paginate-beer/paginate-beer.component';
import { RandomBeerComponent } from './random-beer/random-beer.component';
import { SearchBeerComponent } from './search-beer/search-beer.component';
import { BeerEffects } from './state/beer.effects';
import { reducer } from './state/beer.reducer';

@NgModule({
  imports: [
    SharedModule,
    BeerRoutingModule,
    StoreModule.forFeature('beers', reducer),
    EffectsModule.forFeature([
      BeerEffects
    ])
  ],
  declarations: [
    BeerComponent,
    RandomBeerComponent,
    SearchBeerComponent,
    PaginateBeerComponent
  ]
})
export class BeerModule { }
