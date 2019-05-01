import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateBeerComponent } from './paginate-beer.component';

describe('PaginateBeerComponent', () => {

  let component: PaginateBeerComponent;
  let fixture: ComponentFixture<PaginateBeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginateBeerComponent]
    }).overrideComponent(PaginateBeerComponent, {
      set: {
        template: ''
      }
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the page number', () => {
      spyOn(component.pageChange, 'emit');
      component.onPageChange(3);
      expect(component.pageChange.emit).toHaveBeenCalledWith(3);
  });
});
