/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';

describe('BeerService', () => {

  let beerService: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [BeerService]
    });
    beerService = TestBed.get(BeerService);
  });

  it('should be truthy', () => {
    expect(beerService).toBeTruthy();
  });

  fit('should return a random beer', () => {
    beerService.getRandomBeer()
      .subscribe(beer => {
        console.log(beer);

      }, error => {
        console.log(error);
      });
  });

});
