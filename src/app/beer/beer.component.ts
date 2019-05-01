import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Beer } from '../shared/models/beer.model';
import { BeerService } from '../shared/services/beer-service/beer.service';

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

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        this.randomBeer = data.beerData[0];
        this.allBeers = data.beerData[1];
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
}
