import { Params } from '@angular/router';
import { Action } from '@ngrx/store';

import { Beer } from '../../shared/models/beer.model';
import { BeerState } from './beer.reducer';

export enum BeerActionTypes {
    LoadBeersAction = '[Beers] Load',
    LoadBeersSuccessAction = '[Beers] Load Beers Success',
    GetRandomBeerAction = '[Beers] Get Random Beer',
    GetRandomBeerSuccessAction = '[Beers] Get Random Beer Success',
    GetRandomNonAlcoholicBeerAction = '[Beers] Get Random Non Alcoholic Beer'
}

export class LoadBeersAction implements Action {
    readonly type = BeerActionTypes.LoadBeersAction;

    constructor(public payload: Params) {}
}

export class LoadBeersSuccessAction implements Action {
    readonly type = BeerActionTypes.LoadBeersSuccessAction;

    constructor(public payload: BeerState) { }
}

export class GetRandomBeerAction implements Action {
    readonly type = BeerActionTypes.GetRandomBeerAction;

    constructor(public payload?: any) { }
}

export class GetRandomBeerSuccessAction implements Action {
    readonly type = BeerActionTypes.GetRandomBeerSuccessAction;

    constructor(public payload: Beer) { }
}

export class GetRandomNonAlcoholicBeerAction implements Action {
    readonly type = BeerActionTypes.GetRandomNonAlcoholicBeerAction;

    constructor(public payload?: any) { }
}

export type BeerActions
    = LoadBeersAction
    | LoadBeersSuccessAction
    | GetRandomBeerAction
    | GetRandomBeerSuccessAction
    | GetRandomNonAlcoholicBeerAction;
