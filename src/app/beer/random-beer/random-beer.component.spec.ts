import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBeerComponent } from './random-beer.component';

describe('RandomBeerComponent', () => {

  let component: RandomBeerComponent;
  let fixture: ComponentFixture<RandomBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomBeerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeerComponent);
    component = fixture.componentInstance;
    component.randomBeer = require('../../../../e2e/responses/random-beer.json');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when random beer is clicked', () => {
    spyOn(component.getRandomBeer, 'emit');
    component.onRandomBeerClick();
    expect(component.getRandomBeer.emit).toHaveBeenCalled();
  });

  it('should emit when non alcoholic beer us  clicked', () => {
    spyOn(component.getNonAlcoholicBeer, 'emit');
    component.onNonAlcoholicBeerClick();
    expect(component.getNonAlcoholicBeer.emit).toHaveBeenCalled();
  });
});
