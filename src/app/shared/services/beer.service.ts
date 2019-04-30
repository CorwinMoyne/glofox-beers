import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl = 'https://api.punkapi.com/v2/beers/';

  constructor(
    private httpService: HttpService) { }

  getRandomBeer(): Observable<any> {
    return this.httpService.get(this.baseUrl + 'random')
      .pipe(
        map(beers => {
          return beers[0];
        })
      );
  }
}
