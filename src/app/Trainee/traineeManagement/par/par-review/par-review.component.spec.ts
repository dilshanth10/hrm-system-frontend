import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParReviewComponent } from './par-review.component';

describe('ParReviewComponent', () => {
  let component: ParReviewComponent;
  let fixture: ComponentFixture<ParReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
