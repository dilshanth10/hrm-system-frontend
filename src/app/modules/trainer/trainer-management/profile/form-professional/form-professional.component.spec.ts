import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfessionalComponent } from './form-professional.component';

describe('FormProfessionalComponent', () => {
  let component: FormProfessionalComponent;
  let fixture: ComponentFixture<FormProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
