import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenHrViewLoanComponent } from './taken-hr-view-loan.component';

describe('TakenHrViewLoanComponent', () => {
  let component: TakenHrViewLoanComponent;
  let fixture: ComponentFixture<TakenHrViewLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenHrViewLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenHrViewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
