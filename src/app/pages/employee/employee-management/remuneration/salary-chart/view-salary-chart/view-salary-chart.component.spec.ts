import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryChartComponent } from './view-salary-chart.component';

describe('ViewSalaryChartComponent', () => {
  let component: ViewSalaryChartComponent;
  let fixture: ComponentFixture<ViewSalaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSalaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
