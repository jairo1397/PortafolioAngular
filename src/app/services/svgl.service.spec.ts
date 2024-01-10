import { TestBed } from '@angular/core/testing';

import { SvglService } from './svgl.service';

describe('SvglService', () => {
  let service: SvglService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvglService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
