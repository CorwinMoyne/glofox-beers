import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';

import { Beer } from '../shared/models/beer.model';
import { BeerService } from '../shared/services/beer-service/beer.service';
import * as fromBeer from './state/beer.reducer';
import * as BeerActions from './state/beer.actions';
import { BeerActions } from './state/beer.actions';

/**
 * the search options available in the search-beer
 */
export enum SearchOptions {
  Name = 'name',
  Date = 'date'
}

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  allBeers$: Observable<Beer[]>;
  randomBeer$: Observable<Beer>;
  searchBy = SearchOptions.Name;
  page: string;
  perPage: string;
  beerName: string;
  brewedBefore: string;

  // normally we would get this from server but it's not supported
  pageSize = 80;

  constructor(
    private store: Store<fromBeer.State>,
    private router: Router,
    private route: ActivatedRoute,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.allBeers$ = this.store.select(state => state.beers.allBeers);
    this.randomBeer$ = this.store.select(state => state.beers.randomBeer);
  }

  /**
   * gets a random beer
   */
  getRandomBeer(): void {
    this.store.dispatch(new BeerActions.GetRandomBeerAction());
  }

  /**
   * gets a random alcoholic beer
   */
  getRandomNonAlcoholicBeer(): void {
    this.store.dispatch(new BeerActions.GetRandomNonAlcoholicBeerAction());
  }

  /**
   * filters beer by name
   *
   * @param beerName beer name to filter by
   */
  getBeersByName(beerName: string): void {
    this.beerName = beerName;
    this.onPageChange('1');
    // this.pageSize = this.allBeers.length;
  }

  /**
   * filters by brewed before date
   *
   * @param date date to filter by
   */
  getBeersByDate(date: any): void {
    this.brewedBefore = moment(
      new Date(`${date.year}-${date.month}-${date.day}`)
    ).format('MM-YYYY');
    this.onPageChange('1');
    // this.pageSize = this.allBeers.length;
  }

  /**
   * navigates to /beer
   *
   * @param page the page number
   */
  onPageChange(page: string): void {
    this.page = page;
    this.router.navigate(['/beer'], {
      queryParams: {
        page: this.page,
        per_page: this.perPage,
        beer_name: this.beerName,
        brewed_before: this.brewedBefore
      }
    });
  }
}
