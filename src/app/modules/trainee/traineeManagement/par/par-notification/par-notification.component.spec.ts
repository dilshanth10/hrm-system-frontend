import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParNotificationComponent } from './par-notification.component';

describe('ParNotificationComponent', () => {
  let component: ParNotificationComponent;
  let fixture: ComponentFixture<ParNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
