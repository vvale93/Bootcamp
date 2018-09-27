import { TestBed, inject } from '@angular/core/testing';

import { SearchCharService } from './search-char.service';

describe('SearchCharService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCharService]
    });
  });

  it('should be created', inject([SearchCharService], (service: SearchCharService) => {
    expect(service).toBeTruthy();
  }));
});
