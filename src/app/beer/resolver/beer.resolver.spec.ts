import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TestingModule } from '../../../../testing/testing.module';
import { BeerResolver } from './beer.resolver';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import * as BeerActions from '../state/beer.actions';
import * as fromBeer from '../state/beer.reducer';

describe('BeerResolver', () => {

  let beerResolver: BeerResolver;
  let store: Store<fromBeer.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        StoreModule.forRoot({
          'beers': combineReducers(fromBeer.reducer)
        })
      ],
      providers: [BeerResolver]
    });
    beerResolver = TestBed.get(BeerResolver);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be defined', () => {
    expect(beerResolver).toBeTruthy();
  });

  it('should dispatch an event to load beers', () => {
    const action = new BeerActions.LoadBeersAction(undefined);
    const route = new ActivatedRouteSnapshot();
    beerResolver.resolve(route);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
