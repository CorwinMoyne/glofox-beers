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
    // const page = !!route.queryParams ? route.queryParams.page : undefined;
    // const perPage = !!route.queryParams ? route.queryParams.per_page : undefined;
    // const beerName = !!route.queryParams ? route.queryParams.beer_name : undefined;
    // const brewedBefore = !!route.queryParams ? route.queryParams.brewed_before : undefined;
    // return forkJoin([
    //   this.beerService.getRandomBeer(),
    //   this.beerService.getAllBeers(page, perPage, beerName, brewedBefore)
    // ]);
  }
}
