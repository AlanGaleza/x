import { TestBed } from '@angular/core/testing';

import { ApiLicenseService } from './api-license.service';

describe('ApiLicenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiLicenseService = TestBed.get(ApiLicenseService);
    expect(service).toBeTruthy();
  });
});
