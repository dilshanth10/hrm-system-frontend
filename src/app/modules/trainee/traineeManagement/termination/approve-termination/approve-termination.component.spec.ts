import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTerminationComponent } from './approve-termination.component';

describe('ApproveTerminationComponent', () => {
  let component: ApproveTerminationComponent;
  let fixture: ComponentFixture<ApproveTerminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveTerminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveTerminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
