import { TestBed } from '@angular/core/testing';

import { NewsaleService } from './newsale.service';

describe('NewsaleService', () => {
  let service: NewsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
