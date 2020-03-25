import { TestBed } from '@angular/core/testing';

import { Package1Service } from './package1.service';

describe('Package1Service', () => {
  let service: Package1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Package1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
