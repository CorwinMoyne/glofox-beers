import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl = 'https://api.punkapi.com/v2/beers/';

  constructor(
    private httpService: HttpService) { }

  /**
   * returns a random beer Observable
   */
  getRandomBeer(): Observable<any> {
    return this.httpService.get(this.baseUrl + 'random')
      .pipe(
        map(beers => {
          return beers[0];
        })
      );
  }

  /**
   * returns a random alcoholic beer Observable
   */
  getRandomNonAlcoholicBeer(): Observable<any> {
    return this.httpService.get(this.baseUrl + '?abv_lt=1')
      .pipe(
        map(beers => {
          const randomInt = this.getRandomInt(beers.length);
          return beers[randomInt];
        })
      );
  }

  /**
   * returns a random number up to max
   *
   * @param max max number allowed
   */
  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getAllBeers(page: number, perPage: number, beerName: string, brewedBefore): Observable<any> {
    return ;
  }
}
