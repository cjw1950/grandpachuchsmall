import { TestBed, inject } from '@angular/core/testing';

import { RestaurantEquipmentService } from './restaurant-equipment.service';

describe('RestaurantEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantEquipmentService]
    });
  });

  it('should be created', inject([RestaurantEquipmentService], (service: RestaurantEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
