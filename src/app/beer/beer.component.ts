import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from '../shared/models/beer.model';
import { BeerService } from '../shared/services/beer-service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  allBeers: Beer[];
  randomBeer: Beer;

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
}
