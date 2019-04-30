/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';

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

  fit('should return all beers', () => {
    // beerService.getAllBeers()
    //   .subscribe(beers => {
    //     expect(beers).toBeDefined();
    //   });
  });
});
