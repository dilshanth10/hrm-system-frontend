import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTerminationAcceptModalComponent } from './trainee-termination-accept-modal.component';

describe('TraineeTerminationAcceptModalComponent', () => {
  let component: TraineeTerminationAcceptModalComponent;
  let fixture: ComponentFixture<TraineeTerminationAcceptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeTerminationAcceptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTerminationAcceptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
