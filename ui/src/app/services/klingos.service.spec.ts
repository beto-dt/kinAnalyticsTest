import { TestBed } from '@angular/core/testing';

import { KlingosService } from './klingos.service';

describe('KlingosService', () => {
  let service: KlingosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlingosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
