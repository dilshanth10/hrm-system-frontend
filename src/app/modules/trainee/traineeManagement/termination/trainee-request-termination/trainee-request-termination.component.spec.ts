import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TraineeRequestTerminationComponent } from './trainee-request-termination.component';

describe('TraineeRequestTerminationComponent', () => {
  let component: TraineeRequestTerminationComponent;
  let fixture: ComponentFixture<TraineeRequestTerminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeRequestTerminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeRequestTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
