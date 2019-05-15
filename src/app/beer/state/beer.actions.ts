import { Action } from '@ngrx/store';

import { BeerState } from './beer.reducer';

export enum BeerActionTypes {
    LoadBeersAction = '[Beers] Load',
    LoadBeersSuccessAction = '[Beers] Load Beers Success'
}

export class LoadBeersAction implements Action {
    readonly type = BeerActionTypes.LoadBeersAction;
}

export class LoadBeersSuccessAction implements Action {
    readonly type = BeerActionTypes.LoadBeersSuccessAction;

    constructor(public payload: BeerState) { }
}

export type BeerActions
    = LoadBeersAction
    | LoadBeersSuccessAction;
