import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Beer } from '../../shared/models/beer.model';
import * as fromRoot from '../../state/app.state';
import { BeerActions, BeerActionTypes } from './beer.actions';

export interface State extends fromRoot.State {
    beers: BeerState;
}

export interface BeerState {
    randomBeer: Beer;
    allBeers: Beer[];
}

const initialState: BeerState = {
    randomBeer: null,
    allBeers: []
};

const getBeerFeatureState = createFeatureSelector<BeerState>('beers');

export const getAllBeers = createSelector(
    getBeerFeatureState,
    state => state.allBeers
);

export const getRandomBeer = createSelector(
    getBeerFeatureState,
    state => state.randomBeer
);

export function reducer(state = initialState, action: BeerActions): BeerState {
    switch (action.type) {
        case BeerActionTypes.LoadBeersSuccessAction:
            return {
                ...state,
                randomBeer: action.payload.randomBeer,
                allBeers: action.payload.allBeers
            };
        case BeerActionTypes.GetRandomBeerSuccessAction:
            return {
                ...state,
                randomBeer: action.payload
            };
        default:
            return state;
    }
}
