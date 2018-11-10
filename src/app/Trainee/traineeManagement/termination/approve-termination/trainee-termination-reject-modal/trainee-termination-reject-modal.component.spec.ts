import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTerminationRejectModalComponent } from './trainee-termination-reject-modal.component';

describe('TraineeTerminationRejectModalComponent', () => {
  let component: TraineeTerminationRejectModalComponent;
  let fixture: ComponentFixture<TraineeTerminationRejectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeTerminationRejectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTerminationRejectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
