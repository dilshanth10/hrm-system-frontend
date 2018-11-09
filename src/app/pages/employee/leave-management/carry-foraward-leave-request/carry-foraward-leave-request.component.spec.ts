import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryForawardLeaveRequestComponent } from './carry-foraward-leave-request.component';

describe('CarryForawardLeaveRequestComponent', () => {
  let component: CarryForawardLeaveRequestComponent;
  let fixture: ComponentFixture<CarryForawardLeaveRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryForawardLeaveRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryForawardLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
