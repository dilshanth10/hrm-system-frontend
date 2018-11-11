import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationHistoryComponent } from './termination-history.component';

describe('TerminationHistoryComponent', () => {
  let component: TerminationHistoryComponent;
  let fixture: ComponentFixture<TerminationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
