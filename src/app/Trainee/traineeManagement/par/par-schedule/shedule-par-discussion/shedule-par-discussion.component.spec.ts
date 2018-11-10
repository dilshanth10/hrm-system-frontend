import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleParDiscussionComponent } from './shedule-par-discussion.component';

describe('SheduleParDiscussionComponent', () => {
  let component: SheduleParDiscussionComponent;
  let fixture: ComponentFixture<SheduleParDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleParDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleParDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
