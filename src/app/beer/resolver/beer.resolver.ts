import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';

import * as BeerActions from '../state/beer.actions';
import * as fromBeer from '../state/beer.reducer';

@Injectable({
  providedIn: 'root'
})
export class BeerResolver {

  constructor(
    private store: Store<fromBeer.State>,
    private beerService: BeerService) { }

  /**
   * resolves random beer and all beers
   *
   * @param route ActivatedRouteSnapshot
   */
  resolve(route: ActivatedRouteSnapshot): void {
    this.store.dispatch(new BeerActions.LoadBeersAction());
  }
}
