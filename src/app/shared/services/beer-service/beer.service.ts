import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../../../core/services/http.service';
import { UrlBuilderService } from '../url-builder/url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl = 'https://api.punkapi.com/v2/beers/';

  constructor(
    private httpService: HttpService,
    private urlBuilderService: UrlBuilderService) { }

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

  /**
   * returns all beers
   *
   * @param page the page number
   * @param perPage items per page
   * @param beerName beer name
   * @param brewedBefore brewed before date
   */
  getAllBeers(page?: string, perPage?: string, beerName?: string, brewedBefore?: Date): Observable<any> {
    let baseUrl = this.baseUrl + '?page={0}&per_page={1}';
    if (!!beerName && !!brewedBefore) {
      baseUrl += '&beer_name={2}&brewed_before={3}';
    } else if (!!beerName) {
      baseUrl += '&beer_name={2}';
    } else if (!!brewedBefore) {
      baseUrl += 'brewed_before={2}';
    }
    const url = this.urlBuilderService.buildUrl(baseUrl, [
      !!page ? page : '1',
      !!perPage ? perPage : '80',
      !!beerName ? beerName : '',
      !!brewedBefore ? moment(brewedBefore).format('MM-YYYY') : ''
    ]);
    return this.httpService.get(url);
  }
}
