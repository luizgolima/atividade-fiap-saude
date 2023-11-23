import { TestBed } from '@angular/core/testing';

import { InsulinaService } from './insulina.service';

describe('InsulinaService', () => {
  let service: InsulinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsulinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
