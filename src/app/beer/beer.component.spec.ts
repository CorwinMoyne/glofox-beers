import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { TestingModule } from 'testing/testing.module';

import { BeerStubService } from '../../../testing/services/beer-stub.service';
import { BeerComponent } from './beer.component';
import * as BeerActions from './state/beer.actions';
import * as fromBeer from './state/beer.reducer';

describe('BeerComponent', () => {

    let component: BeerComponent;
    let fixture: ComponentFixture<BeerComponent>;
    let router: Router;
    let store: Store<fromBeer.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestingModule,
                StoreModule.forRoot({
                    'beers': combineReducers(fromBeer.reducer)
                })
            ],
            providers: [
                // Store,
                { provide: BeerService, useClass: BeerStubService }
            ],
            declarations: [BeerComponent]
        }).overrideComponent(BeerComponent, {
            set: {
                template: ''
            }
        }).compileComponents();
        router = TestBed.get(Router);
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerComponent);
        component = fixture.componentInstance;
        component.allBeers$ = undefined;
        fixture.detectChanges();
    });

    it('should be truthy', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch an action to getRandomBeer', () => {
        const action = new BeerActions.GetRandomBeerAction();
        component.getRandomBeer();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action to getRandomNonAlcoholicBeer', () => {
        const action = new BeerActions.GetRandomNonAlcoholicBeerAction();
        component.getRandomNonAlcoholicBeer();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should getBeersByName', () => {
        spyOn(router, 'navigate');
        component.allBeers$ = undefined;
        component.getBeersByName('test');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/beer'], Object({ queryParams: Object({ page: '1', per_page: '25', beer_name: 'test', brewed_before: undefined }) })
        );
    });

    it('should getBeersByDate', () => {
        spyOn(router, 'navigate');
        component.allBeers$ = undefined;
        component.getBeersByDate({ year: 2010, month: 5, day: 1 });
        expect(router.navigate).toHaveBeenCalledWith(
            ['/beer'], Object({ queryParams: Object({ page: '1', per_page: '25', beer_name: undefined, brewed_before: '05-2010' }) })
        );
    });

    it('should navigate to /beer', () => {
        spyOn(router, 'navigate');
        component.onPageChange('2');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/beer'], Object({ queryParams: Object({ page: '2', per_page: '25', beer_name: undefined, brewed_before: undefined }) })
        );
    });
});
