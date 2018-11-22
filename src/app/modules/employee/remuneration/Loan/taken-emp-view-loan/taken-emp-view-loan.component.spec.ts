import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenEmpViewLoanComponent } from './taken-emp-view-loan.component';

describe('TakenEmpViewLoanComponent', () => {
  let component: TakenEmpViewLoanComponent;
  let fixture: ComponentFixture<TakenEmpViewLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenEmpViewLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenEmpViewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
