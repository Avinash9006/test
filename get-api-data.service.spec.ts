import { TestBed } from '@angular/core/testing';

import { GetApiDataService } from './get-api-data.service';

describe('GetApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetApiDataService = TestBed.get(GetApiDataService);
    expect(service).toBeTruthy();
  });
});
