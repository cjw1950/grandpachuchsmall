import { TestBed, inject } from '@angular/core/testing';

import { BakerytinsService } from './bakerytins.service';

describe('BakerytinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BakerytinsService]
    });
  });

  it('should be created', inject([BakerytinsService], (service: BakerytinsService) => {
    expect(service).toBeTruthy();
  }));
});
