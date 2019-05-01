import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpStubService {

  constructor() { }

  get(url: string): Observable<any> {
    if (url === 'https://api.punkapi.com/v2/beers/random' || url === 'https://api.punkapi.com/v2/beers/?abv_lt=1') {
      const randomBeer = require('../../e2e/responses/random-beer.json');
      return of(randomBeer);
    } else if (url === 'https://api.punkapi.com/v2/beers/?page=1&per_page=12') {
      const allBeers = require('../../e2e/responses/all-beers.json');
      return of(allBeers);
    } else if (url === 'https://api.punkapi.com/v2/beers/?page=1&per_page=12&beer_name=Buzz') {
      const buzzBeer = require('../../e2e/responses/buzz-beer.json');
      return of(buzzBeer);
    } else if (url === 'https://api.punkapi.com/v2/beers/?page=1&per_page=12&brewed_before=2010-02') {
      const brewedBefore = require('../../e2e/responses/brewed-before.json');
      return of(brewedBefore);
    }
  }
}
