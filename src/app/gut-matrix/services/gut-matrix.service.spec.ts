import { TestBed } from '@angular/core/testing';

import { GutMatrixService } from './gut-matrix.service';

describe('GutMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GutMatrixService = TestBed.get(GutMatrixService);
    expect(service).toBeTruthy();
  });
});
