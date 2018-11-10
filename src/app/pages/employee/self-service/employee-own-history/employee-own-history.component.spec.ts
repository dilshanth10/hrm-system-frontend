import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOwnHistoryComponent } from './employee-own-history.component';

describe('EmployeeOwnHistoryComponent', () => {
  let component: EmployeeOwnHistoryComponent;
  let fixture: ComponentFixture<EmployeeOwnHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOwnHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOwnHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
