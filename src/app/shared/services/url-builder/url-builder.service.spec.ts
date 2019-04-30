import { inject, TestBed } from '@angular/core/testing';

import { UrlBuilderService } from './url-builder.service';

describe('Service: UrlBuilder', () => {

  let urlBuilderService: UrlBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlBuilderService]
    });
    urlBuilderService = TestBed.get(UrlBuilderService);
  });

  it('should be truthy', () => {
    expect(urlBuilderService).toBeTruthy();
  });

  it('should build a url and return it', () => {
      expect(urlBuilderService.buildUrl('thisUrl?param1={0}&param2={1}', ['test1', 'test2'])).toBe('thisUrl?param1=test1&param2=test2');
  });
});
