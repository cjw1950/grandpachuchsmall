import { TestBed, inject } from '@angular/core/testing';

import { SportparaService } from './sportpara.service';

describe('SportparaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportparaService]
    });
  });

  it('should be created', inject([SportparaService], (service: SportparaService) => {
    expect(service).toBeTruthy();
  }));
});
