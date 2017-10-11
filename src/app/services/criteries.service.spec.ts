import { TestBed, inject } from '@angular/core/testing';

import { CriteriesService } from './criteries.service';

describe('CriteriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriteriesService]
    });
  });

  it('should be created', inject([CriteriesService], (service: CriteriesService) => {
    expect(service).toBeTruthy();
  }));
});
