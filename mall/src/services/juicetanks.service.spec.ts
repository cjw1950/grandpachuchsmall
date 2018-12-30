import { TestBed, inject } from '@angular/core/testing';

import { JuicetanksService } from './juicetanks.service';

describe('JuicetanksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuicetanksService]
    });
  });

  it('should be created', inject([JuicetanksService], (service: JuicetanksService) => {
    expect(service).toBeTruthy();
  }));
});
