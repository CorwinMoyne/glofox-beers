import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { BeerService } from '../../shared/services/beer-service/beer.service';
import * as BeerActions from './beer.actions';
import { BeerState } from './beer.reducer';

@Injectable()
export class BeerEffects {

    constructor(
        private beerService: BeerService,
        private actions$: Actions) { }

    @Effect()
    loadBeers$ = this.actions$.pipe(
        ofType(BeerActions.BeerActionTypes.LoadBeersAction),
        switchMap(() => {
            return forkJoin([
                this.beerService.getRandomBeer(),
                this.beerService.getAllBeers()
            ]).pipe(
                map(data => new BeerActions.LoadBeersSuccessAction({ randomBeer: data[0], allBeers: data[1] }))
            );
        })
    );
}
