import { TestBed, inject } from '@angular/core/testing';

import { ClassMatcherService } from './class-matcher.service';

describe('ClassMatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassMatcherService]
    });
  });

  it('should be created', inject([ClassMatcherService], (service: ClassMatcherService) => {
    expect(service).toBeTruthy();
  }));
});
