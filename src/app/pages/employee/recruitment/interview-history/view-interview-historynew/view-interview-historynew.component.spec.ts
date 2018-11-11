import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewHistorynewComponent } from './view-interview-historynew.component';

describe('ViewInterviewHistorynewComponent', () => {
  let component: ViewInterviewHistorynewComponent;
  let fixture: ComponentFixture<ViewInterviewHistorynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInterviewHistorynewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewHistorynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
