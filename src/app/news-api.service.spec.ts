import { TestBed, inject } from '@angular/core/testing';

import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsApiService]
    });
  });

  it('should be created', inject([NewsApiService], (service: NewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
