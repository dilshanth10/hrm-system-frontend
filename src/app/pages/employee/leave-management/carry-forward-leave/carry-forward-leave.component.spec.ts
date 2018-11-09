import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarryForwardLeaveComponent } from './carry-forward-leave.component';

describe('CarryForwardLeaveComponent', () => {
  let component: CarryForwardLeaveComponent;
  let fixture: ComponentFixture<CarryForwardLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarryForwardLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarryForwardLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
