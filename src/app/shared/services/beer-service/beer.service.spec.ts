import { TestBed } from '@angular/core/testing';
import { Params, ActivatedRouteSnapshot } from '@angular/router';

import { TestingModule } from '../../../../../testing/testing.module';
import { BeerService } from './beer.service';

describe('BeerService', () => {

  let beerService: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      providers: [BeerService]
    });
    beerService = TestBed.get(BeerService);
  });

  it('should be truthy', () => {
    expect(beerService).toBeTruthy();
  });

  it('should return a random beer', () => {
    beerService.getRandomBeer()
      .subscribe(beer => {
        expect(beer).toBeDefined();
        expect(beer.id).toBe(297);
      });
  });

  it('should return a random non alcoholic beer', () => {
    beerService.getRandomNonAlcoholicBeer()
      .subscribe(beer => {
        expect(beer).toBeDefined();
      });
  });

  it('should return all beers', () => {
    const params: Params = {
      page: '1',
      per_page: '25',
      beer_name: undefined,
      brewed_before: undefined
    };
    beerService.getAllBeers(params)
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(78);
      });
  });

  it('should return all beers with the name Buzz', () => {
    const params: Params = {
      page: '1',
      per_page: '25',
      beer_name: 'Buzz'
    };
    beerService.getAllBeers(params)
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(1);
      });
  });

  it('should return all beers brewed before 02-2010', () => {
    const params: Params = {
      page: '1',
      per_page: '25',
      brewed_before: '2010-02'
    };
    beerService.getAllBeers(params)
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(36);
      });
  });

  it('should not return any beers missing image_url or description', () => {
    const params: Params = {
      page: '1',
      per_page: '25'
    };
    beerService.getAllBeers(params)
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(78);
      });
  });
});
