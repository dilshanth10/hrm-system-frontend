import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrementLetterComponent } from './agrement-letter.component';

describe('AgrementLetterComponent', () => {
  let component: AgrementLetterComponent;
  let fixture: ComponentFixture<AgrementLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrementLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrementLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
