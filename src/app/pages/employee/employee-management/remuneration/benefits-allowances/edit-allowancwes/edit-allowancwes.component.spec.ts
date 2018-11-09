import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllowancwesComponent } from './edit-allowancwes.component';

describe('EditAllowancwesComponent', () => {
  let component: EditAllowancwesComponent;
  let fixture: ComponentFixture<EditAllowancwesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllowancwesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllowancwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
