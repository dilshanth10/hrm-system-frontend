import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralInformationComponent } from './edit-general-information.component';

describe('EditGeneralInformationComponent', () => {
  let component: EditGeneralInformationComponent;
  let fixture: ComponentFixture<EditGeneralInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
