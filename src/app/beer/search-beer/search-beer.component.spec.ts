import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModule } from '../../../../testing/testing.module';
import { SearchBeerComponent } from './search-beer.component';

describe('SearchBeerComponent', () => {

  let component: SearchBeerComponent;
  let fixture: ComponentFixture<SearchBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [SearchBeerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeerComponent);
    component = fixture.componentInstance;
    component.allBeers = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if isSearchByName', () => {
    component.searchBy = 'name';
    expect(component.isSearchByName()).toBeTruthy();
  });

  it('should return false if not isSearchByName', () => {
    component.searchBy = 'date';
    expect(component.isSearchByName()).toBeFalsy();
  });

  it('should return true if isSearchByDate', () => {
    component.searchBy = 'date';
    expect(component.isSearchByDate()).toBeTruthy();
  });

  it('should return false if not isSearchByDate', () => {
    component.searchBy = 'name';
    expect(component.isSearchByDate()).toBeFalsy();
  });

  it('should getBeersByName on click if isSearchByName', () => {
    spyOn(component.getBeersByName, 'emit');
    component.searchModel = 'test';
    component.searchBy = 'name';
    component.onSearchClick();
    expect(component.getBeersByName.emit).toHaveBeenCalledWith('test');
  });

  it('should getBeersByDate on click if isSearchByDate', () => {
    spyOn(component.getBeersByDate, 'emit');
    component.searchModel = 'test';
    component.searchBy = 'date';
    component.onSearchClick();
    expect(component.getBeersByDate.emit).toHaveBeenCalledWith('test');
  });
});
