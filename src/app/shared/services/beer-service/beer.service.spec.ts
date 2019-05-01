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

  it('should return all beers', () => {
    beerService.getAllBeers()
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(78);
      });
  });

  it('should return all beers with the name Buzz', () => {
    beerService.getAllBeers(null, null, 'Buzz')
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(1);
      });
  });

  it('should return all beers brewed before 02-2010', () => {
    beerService.getAllBeers(null, null, null, '2010-02')
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(36);
      });
  });

  it('should not return any beers missing image_url or description', () => {
    beerService.getAllBeers()
      .subscribe(beers => {
        expect(beers).toBeDefined();
        expect(beers.length).toBe(78);
      });
  });
});
