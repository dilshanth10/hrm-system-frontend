import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigParComponent } from './config-par.component';

describe('ConfigParComponent', () => {
  let component: ConfigParComponent;
  let fixture: ComponentFixture<ConfigParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
