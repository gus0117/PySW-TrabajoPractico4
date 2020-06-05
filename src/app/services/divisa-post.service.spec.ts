import { TestBed } from '@angular/core/testing';

import { DivisaPostService } from './divisa-post.service';

describe('DivisaPostService', () => {
  let service: DivisaPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisaPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
