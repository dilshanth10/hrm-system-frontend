import { TestBed } from '@angular/core/testing';

import { InterviewSelestionRejectedService } from './interview-selestion-rejected.service';

describe('InterviewSelestionRejectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewSelestionRejectedService = TestBed.get(InterviewSelestionRejectedService);
    expect(service).toBeTruthy();
  });
});
