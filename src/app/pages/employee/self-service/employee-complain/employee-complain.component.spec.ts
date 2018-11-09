import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComplainComponent } from './employee-complain.component';

describe('EmployeeComplainComponent', () => {
  let component: EmployeeComplainComponent;
  let fixture: ComponentFixture<EmployeeComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
