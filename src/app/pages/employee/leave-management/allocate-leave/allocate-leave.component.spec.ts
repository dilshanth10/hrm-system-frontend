import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateLeaveComponent } from './allocate-leave.component';

describe('AllocateLeaveComponent', () => {
  let component: AllocateLeaveComponent;
  let fixture: ComponentFixture<AllocateLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocateLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
