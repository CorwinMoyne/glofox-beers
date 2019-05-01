import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { TestingModule } from 'testing/testing.module';

import { BeerStubService } from '../../../testing/services/beer-stub.service';
import { BeerComponent } from './beer.component';

describe('BeerComponent', () => {

    let component: BeerComponent;
    let fixture: ComponentFixture<BeerComponent>;
    let route: ActivatedRoute;
    let router: Router;
    let beerService: BeerService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule],
            providers: [
                { provide: BeerService, useClass: BeerStubService }
            ],
            declarations: [BeerComponent]
        }).overrideComponent(BeerComponent, {
            set: {
                template: ''
            }
        }).compileComponents();
        route = TestBed.get(ActivatedRoute);
        route.data = of({ beerData: [] });
        route.queryParams = of({ page: 1, perPage: 12 });
        router = TestBed.get(Router);
        beerService = TestBed.get(BeerService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerComponent);
        component = fixture.componentInstance;
        component.allBeers = [];
        fixture.detectChanges();
    });

    it('should be truthy', () => {
        expect(component).toBeTruthy();
    });

    it('should getRandomBeer', () => {
        spyOn(beerService, 'getRandomBeer').and.returnValue(
            of(require('../../../e2e/responses/random-beer.json'))
        );
        component.randomBeer = undefined;
        component.getRandomBeer();
        expect(beerService.getRandomBeer).toHaveBeenCalled();
        expect(component.randomBeer).toBeDefined();
    });

    it('should getNonAlcoholicBeer', () => {
        spyOn(beerService, 'getRandomNonAlcoholicBeer').and.returnValue(
            of(require('../../../e2e/responses/random-beer.json'))
        );
        component.randomBeer = undefined;
        component.getRandomNonAlcoholicBeer();
        expect(beerService.getRandomNonAlcoholicBeer).toHaveBeenCalled();
        expect(component.randomBeer).toBeDefined();
    });

    it('should getBeersByName', () => {
        spyOn(beerService, 'getAllBeers').and.returnValue(
            of(require('../../../e2e/responses/random-beer.json'))
        );
        component.allBeers = undefined;
        component.getBeersByName('test');
        expect(beerService.getAllBeers).toHaveBeenCalled();
        expect(component.allBeers).toBeDefined();
    });

    it('should getBeersByDate', () => {
        spyOn(beerService, 'getAllBeers').and.returnValue(
            of(require('../../../e2e/responses/random-beer.json'))
        );
        component.allBeers = undefined;
        component.getBeersByDate(new Date());
        expect(beerService.getAllBeers).toHaveBeenCalled();
        expect(component.allBeers).toBeDefined();
    });

    it('should navigate to /beer', () => {
        spyOn(router, 'navigate');
        component.onPageChange(2);
        expect(router.navigate).toHaveBeenCalledWith(['/beer'], Object({ queryParams: Object({ page: 2, per_page: 12 }) }));
    });
});
