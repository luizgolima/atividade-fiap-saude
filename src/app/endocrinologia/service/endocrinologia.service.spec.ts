import { TestBed } from '@angular/core/testing';

import { EndocrinologiaService } from './endocrinologia.service';

describe('EndocrinologiaService', () => {
  let service: EndocrinologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndocrinologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
