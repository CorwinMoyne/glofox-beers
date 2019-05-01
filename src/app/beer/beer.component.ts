import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Beer } from '../shared/models/beer.model';
import { BeerService } from '../shared/services/beer-service/beer.service';

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
export class BeerComponent implements OnInit, OnDestroy {

  private routeDataSubscription: Subscription;
  private routeQueryParamsSubscription: Subscription;
  allBeers: Beer[];
  randomBeer: Beer;
  searchBy = SearchOptions.Name;
  page: number;
  perPage: number;
  // normally we would get this from server but it's not supported
  pageSize = 80;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.routeDataSubscription = this.route.data
      .subscribe(data => {
        this.randomBeer = data.beerData[0];
        this.allBeers = data.beerData[1];
      });
    this.route
      .queryParamMap
      .pipe(
        map(params => {
          this.page = +params.get('page') || 1;
          this.perPage = +params.get('per_page') || 12;
        })).subscribe();
    // .subscribe(queryParams => {

    // this.beerService.getAllBeers(this.page.toString(), this.perPage.toString()).subscribe(
    //   allBeers => this.allBeers = allBeers
    // );
    // });
  }

  ngOnDestroy(): void {
    this.routeDataSubscription.unsubscribe();
    this.routeQueryParamsSubscription.unsubscribe();
  }

  /**
   * gets a random beer
   */
  getRandomBeer(): void {
    this.beerService.getRandomBeer().subscribe(
      beer => this.randomBeer = beer
    );
  }

  /**
   * gets a random alcoholic beer
   */
  getRandomNonAlcoholicBeer(): void {
    this.beerService.getRandomNonAlcoholicBeer().subscribe(
      beer => this.randomBeer = beer
    );
  }

  /**
   * filters beer by name
   *
   * @param beerName beer name to filter by
   */
  getBeersByName(beerName: string): void {
    this.beerService.getAllBeers(null, null, beerName)
      .subscribe(beers => {
        this.allBeers = beers;
        this.pageSize = this.allBeers.length;
      });
  }

  /**
   * filters by brewed before date
   *
   * @param date date to filter by
   */
  getBeersByDate(date: any): void {
    const beforeDate = new Date(`${date.year}-${date.month}-${date.day}`);
    this.beerService.getAllBeers(null, null, null, beforeDate)
      .subscribe(beers => {
        this.allBeers = beers;
        this.pageSize = this.allBeers.length;
      });
  }

  /**
   * navigates to /beer
   *
   * @param page the page number
   */
  onPageChange(page: number): void {
    this.router.navigate(['/beer'], { queryParams: { page: page, per_page: this.perPage } });
  }
}
