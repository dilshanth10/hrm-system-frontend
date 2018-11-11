import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourUpcomingParComponent } from './your-upcoming-par.component';

describe('YourUpcomingParComponent', () => {
  let component: YourUpcomingParComponent;
  let fixture: ComponentFixture<YourUpcomingParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourUpcomingParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourUpcomingParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
