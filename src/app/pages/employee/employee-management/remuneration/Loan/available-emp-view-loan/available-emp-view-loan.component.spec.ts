import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEmpViewLoanComponent } from './available-emp-view-loan.component';

describe('AvailableEmpViewLoanComponent', () => {
  let component: AvailableEmpViewLoanComponent;
  let fixture: ComponentFixture<AvailableEmpViewLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableEmpViewLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableEmpViewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
