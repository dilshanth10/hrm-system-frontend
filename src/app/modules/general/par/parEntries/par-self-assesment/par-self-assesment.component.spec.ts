import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParSelfAssesmentComponent } from './par-self-assesment.component';

describe('ParSelfAssesmentComponent', () => {
  let component: ParSelfAssesmentComponent;
  let fixture: ComponentFixture<ParSelfAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParSelfAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParSelfAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
