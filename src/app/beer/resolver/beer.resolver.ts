import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';

@Injectable({
  providedIn: 'root'
})
export class BeerResolver {

  constructor(
    private beerService: BeerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return forkJoin([
      this.beerService.getRandomBeer(),
      this.beerService.getAllBeers()
    ]);
  }
}
