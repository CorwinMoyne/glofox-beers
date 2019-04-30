import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpStubService {

  constructor() { }

  get(url: string): Observable<any> {
    if (url === 'https://api.punkapi.com/v2/beers/random') {
      const randomBeer = require('../../e2e/responses/random-beer.json');
      return of(randomBeer);
    }
  }
}
