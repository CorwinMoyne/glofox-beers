import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';

@Injectable({
  providedIn: 'root'
})
export class BeerResolver {

  constructor(
    private beerService: BeerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const page = route.queryParams.page;
    const perPage = route.queryParams.per_page;
    const beerName = route.queryParams.beer_name;
    const brewedBefore = route.queryParams.brewed_before;
    return forkJoin([
      this.beerService.getRandomBeer(),
      this.beerService.getAllBeers(page, perPage, beerName, brewedBefore)
    ]);
  }
}
