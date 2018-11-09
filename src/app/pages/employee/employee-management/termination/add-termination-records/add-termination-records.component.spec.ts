import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerminationRecordsComponent } from './add-termination-records.component';

describe('AddTerminationRecordsComponent', () => {
  let component: AddTerminationRecordsComponent;
  let fixture: ComponentFixture<AddTerminationRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTerminationRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerminationRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
