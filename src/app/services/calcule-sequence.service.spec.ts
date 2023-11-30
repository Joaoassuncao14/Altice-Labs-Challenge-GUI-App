import { TestBed } from '@angular/core/testing';

import { CalculeSequenceService } from './calcule-sequence.service';

describe('CalculeSequenceService', () => {
  let service: CalculeSequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculeSequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
