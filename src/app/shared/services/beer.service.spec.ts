/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { TestingModule } from '../../../../testing/testing.module';

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
});
