import { TestBed } from '@angular/core/testing';

import { AcategoryService } from './acategory.service';

describe('AcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcategoryService = TestBed.get(AcategoryService);
    expect(service).toBeTruthy();
  });
});
