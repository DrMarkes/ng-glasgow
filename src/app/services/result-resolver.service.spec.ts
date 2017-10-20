import { TestBed, inject } from '@angular/core/testing';

import { ResultResolverService } from './result-resolver.service';

describe('ResultResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultResolverService]
    });
  });

  it('should be created', inject([ResultResolverService], (service: ResultResolverService) => {
    expect(service).toBeTruthy();
  }));
});
