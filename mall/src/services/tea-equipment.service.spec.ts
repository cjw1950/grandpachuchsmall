import { TestBed, inject } from '@angular/core/testing';

import { TeaEquipmentService } from './tea-equipment.service';

describe('TeaEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaEquipmentService]
    });
  });

  it('should be created', inject([TeaEquipmentService], (service: TeaEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
