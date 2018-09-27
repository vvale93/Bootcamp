import { TestBed, inject } from '@angular/core/testing';

import { RaceMatcherService } from './race-matcher.service';

describe('RaceMatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceMatcherService]
    });
  });

  it('should be created', inject([RaceMatcherService], (service: RaceMatcherService) => {
    expect(service).toBeTruthy();
  }));
});
