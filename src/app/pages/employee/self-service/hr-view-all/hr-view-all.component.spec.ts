import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRViewAllComponent } from './hr-view-all.component';

describe('HRViewAllComponent', () => {
  let component: HRViewAllComponent;
  let fixture: ComponentFixture<HRViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
