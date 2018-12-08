import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConformModalComponent } from './request-conform-modal.component';

describe('RequestConformModalComponent', () => {
  let component: RequestConformModalComponent;
  let fixture: ComponentFixture<RequestConformModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConformModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConformModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
