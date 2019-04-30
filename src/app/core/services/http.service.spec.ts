/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { TestingModule } from 'testing/testing.module';

import { HttpService } from './http.service';

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      providers: [HttpService]
    });
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
