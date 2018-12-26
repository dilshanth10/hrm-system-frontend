import { TestBed } from '@angular/core/testing';

import { TrainingHistoryService } from './training-history.service';

describe('TrainingHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingHistoryService = TestBed.get(TrainingHistoryService);
    expect(service).toBeTruthy();
  });
});
