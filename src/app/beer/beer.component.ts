import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
export class BeerComponent implements OnInit {

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
    this.route.data
      .subscribe(data => {
        this.randomBeer = data.beerData[0];
        this.allBeers = data.beerData[1];
      });
    this.route.queryParams.subscribe(queryParams => {
      this.page = queryParams.page || 1;
      this.perPage = queryParams.perPage || 12;
      this.beerService.getAllBeers(this.page.toString(), this.perPage.toString()).subscribe(
        allBeers => this.allBeers = allBeers
      );
    });
  }

  getRandomBeer(): void {
    this.beerService.getRandomBeer().subscribe(
      beer => this.randomBeer = beer
    );
  }

  getNonAlcoholicBeer(): void {
    this.beerService.getRandomNonAlcoholicBeer().subscribe(
      beer => this.randomBeer = beer
    );
  }

  getBeersByName(beerName: string): void {
    this.beerService.getAllBeers(null, null, beerName).subscribe(
      beers => this.allBeers = beers
    );
  }

  getBeersByDate(date: any): void {
    const beforeDate = new Date(`${date.year}-${date.month}-${date.day}`);
    this.beerService.getAllBeers(null, null, null, beforeDate).subscribe(
      beers => this.allBeers = beers
    );
  }

  onPageChange(page: number): void {
    this.router.navigate(['/beer'], { queryParams: { page: page, per_page: this.perPage } });
  }
}
