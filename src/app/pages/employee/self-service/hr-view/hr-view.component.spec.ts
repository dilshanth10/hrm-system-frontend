import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRViewComponent } from './hr-view.component';

describe('HRViewComponent', () => {
  let component: HRViewComponent;
  let fixture: ComponentFixture<HRViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
