import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TestingModule } from '../../../../testing/testing.module';
import { BeerResolver } from './beer.resolver';

describe('BeerResolver', () => {

  let beerResolver: BeerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [BeerResolver]
    });
    beerResolver = TestBed.get(BeerResolver);
  });

  it('should be defined', () => {
    expect(beerResolver).toBeTruthy();
  });

  it('should resolve random beer and all beers', () => {
    const route = new ActivatedRouteSnapshot();
    beerResolver.resolve(route).subscribe(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(2);
    });
  });
});
