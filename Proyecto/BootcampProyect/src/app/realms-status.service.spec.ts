import { TestBed, inject } from '@angular/core/testing';

import { RealmsStatusService } from './realms-status.service';

describe('RealmsStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealmsStatusService]
    });
  });

  it('should be created', inject([RealmsStatusService], (service: RealmsStatusService) => {
    expect(service).toBeTruthy();
  }));
});
