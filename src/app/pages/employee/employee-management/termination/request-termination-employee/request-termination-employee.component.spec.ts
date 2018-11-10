import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTerminationEmployeeComponent } from './request-termination-employee.component';

describe('RequestTerminationEmployeeComponent', () => {
  let component: RequestTerminationEmployeeComponent;
  let fixture: ComponentFixture<RequestTerminationEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTerminationEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTerminationEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
