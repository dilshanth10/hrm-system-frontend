import { TestBed } from '@angular/core/testing';

import { WelfareEventService } from './welfare-event.service';

describe('WelfareEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelfareEventService = TestBed.get(WelfareEventService);
    expect(service).toBeTruthy();
  });
});
