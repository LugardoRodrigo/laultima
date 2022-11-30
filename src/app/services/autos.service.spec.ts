import { TestBed } from '@angular/core/testing';

import { AutoService } from './autos.service';

describe('AutosService', () => {
  let service: AutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
