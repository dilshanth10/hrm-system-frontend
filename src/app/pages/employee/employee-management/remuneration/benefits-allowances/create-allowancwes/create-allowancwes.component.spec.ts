import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllowancwesComponent } from './create-allowancwes.component';

describe('CreateAllowancwesComponent', () => {
  let component: CreateAllowancwesComponent;
  let fixture: ComponentFixture<CreateAllowancwesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAllowancwesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAllowancwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
