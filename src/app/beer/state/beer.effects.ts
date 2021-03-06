import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import { BeerService } from '../../shared/services/beer-service/beer.service';
import * as BeerActions from './beer.actions';

@Injectable()
export class BeerEffects {

    constructor(
        private beerService: BeerService,
        private actions$: Actions) { }

    @Effect()
    loadBeers$ = this.actions$.pipe(
        ofType(BeerActions.BeerActionTypes.LoadBeersAction),
        switchMap((action: any) => {
            return forkJoin([
                this.beerService.getRandomBeer(),
                this.beerService.getAllBeers(action.payload)
            ]).pipe(
                map(data => new BeerActions.LoadBeersSuccessAction({ randomBeer: data[0], allBeers: data[1] }))
            );
        })
    );

    @Effect()
    getRandomBeer$ = this.actions$.pipe(
        ofType(BeerActions.BeerActionTypes.GetRandomBeerAction),
        mergeMap(() => {
            return this.beerService.getRandomBeer().pipe(
                map(randomBeer => new BeerActions.GetRandomBeerSuccessAction(randomBeer))
            );
        })
    );

    @Effect()
    getRandomNonAlcoholicBeer$ = this.actions$.pipe(
        ofType(BeerActions.BeerActionTypes.GetRandomNonAlcoholicBeerAction),
        mergeMap(() => {
            return this.beerService.getRandomNonAlcoholicBeer().pipe(
                map(randomBeer => new BeerActions.GetRandomBeerSuccessAction(randomBeer))
            );
        })
    );
}
