import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { Beer } from '../shared/models/beer.model';
import * as BeerActions from './state/beer.actions';
import * as fromBeer from './state/beer.reducer';

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
  styleUrls: ['./beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent implements OnInit {

  allBeers$: Observable<Beer[]>;
  randomBeer$: Observable<Beer>;
  searchBy = SearchOptions.Name;
  page = '1';
  perPage = '25';
  beerName: string;
  brewedBefore: string;
  pageSize = 80;

  constructor(
    private store: Store<fromBeer.State>,
    private router: Router) { }

  ngOnInit(): void {
    this.allBeers$ = this.store.select(fromBeer.getAllBeers);
    this.randomBeer$ = this.store.select(fromBeer.getRandomBeer);
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
    this.brewedBefore = undefined;
    this.beerName = beerName;
    this.onPageChange('1');
  }

  /**
   * filters by brewed before date
   *
   * @param date date to filter by
   */
  getBeersByDate(date: any): void {
    this.beerName = undefined;
    this.brewedBefore = moment(
      new Date(`${date.year}-${date.month}-${date.day}`)
    ).format('MM-YYYY');
    this.onPageChange('1');
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
