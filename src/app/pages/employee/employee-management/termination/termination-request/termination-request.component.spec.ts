import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationRequestComponent } from './termination-request.component';

describe('TerminationRequestComponent', () => {
  let component: TerminationRequestComponent;
  let fixture: ComponentFixture<TerminationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
