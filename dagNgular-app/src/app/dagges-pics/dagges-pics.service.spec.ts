import { TestBed } from '@angular/core/testing';

import { DaggesPicsService } from './dagges-pics.service';

describe('DaggesPicsService', () => {
  let service: DaggesPicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaggesPicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
