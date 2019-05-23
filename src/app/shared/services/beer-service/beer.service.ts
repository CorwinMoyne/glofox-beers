import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpService } from '../../../core/services/http.service';
import { Beer } from '../../models/beer.model';
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
   * calls itself if beer has no image_url or description
   */
  getRandomBeer(): Observable<Beer> {
    return this.httpService.get(this.baseUrl + 'random')
      .pipe(
        map(beers => {
          if (!!beers[0].image_url && !!beers[0].description) {
            return new Beer(beers[0]);
          } else {
            throw new Error('image url or description missing');
          }
        }),
        catchError(() => {
          return this.getRandomBeer();
        })
      );
  }

  /**
   * returns a random alcoholic beer Observable
   */
  getRandomNonAlcoholicBeer(): Observable<Beer> {
    return this.httpService.get(this.baseUrl + '?abv_lt=1')
      .pipe(
        map(beers => {
          const randomInt = this.getRandomInt(beers.length);
          return new Beer(beers[randomInt]);
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
   * @param params queryParams
   */
  getAllBeers(params: Params): Observable<Beer[]> {
    let url = `${this.baseUrl}?page=${params.page}&per_page=${params.per_page}`;
    if (!!params.beer_name) {
      url += `&beer_name=${params.beer_name}`;
    }
    if (!!params.brewed_before) {
      url += `&brewed_before=${params.brewed_before}`;
    }
    return this.httpService.get(url)
      .pipe(
        map(beerResponse => {
          const beers = beerResponse.filter(beer => {
            if (!!beer.image_url && !!beer.description) {
              return true;
            }
            return false;
          }).map(beer => {
            return new Beer(beer);
          });
          return beers;
        })
      );
  }
}
