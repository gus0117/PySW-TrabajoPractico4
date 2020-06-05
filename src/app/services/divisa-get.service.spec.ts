import { TestBed } from '@angular/core/testing';

import { DivisaGetService } from './divisa-get.service';

describe('DivisaGetService', () => {
  let service: DivisaGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisaGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
