import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { KlingosService } from './klingos.service';

describe('KlingosService', () => {
  let service: KlingosService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(KlingosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
