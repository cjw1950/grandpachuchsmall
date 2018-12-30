import { TestBed, inject } from '@angular/core/testing';

import { SportwomanService } from './sportwoman.service';

describe('SportwomanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportwomanService]
    });
  });

  it('should be created', inject([SportwomanService], (service: SportwomanService) => {
    expect(service).toBeTruthy();
  }));
});
