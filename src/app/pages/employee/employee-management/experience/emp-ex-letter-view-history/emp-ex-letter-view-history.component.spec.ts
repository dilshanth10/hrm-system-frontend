import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExLetterViewHistoryComponent } from './emp-ex-letter-view-history.component';

describe('EmpExLetterViewHistoryComponent', () => {
  let component: EmpExLetterViewHistoryComponent;
  let fixture: ComponentFixture<EmpExLetterViewHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpExLetterViewHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpExLetterViewHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
