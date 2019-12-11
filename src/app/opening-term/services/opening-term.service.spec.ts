import { TestBed } from '@angular/core/testing';

import { OpeningTermService } from './opening-term.service';

describe('OpeningTermService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpeningTermService = TestBed.get(OpeningTermService);
    expect(service).toBeTruthy();
  });
});
