import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryChatComponent } from './edit-salary-chat.component';

describe('EditSalaryChatComponent', () => {
  let component: EditSalaryChatComponent;
  let fixture: ComponentFixture<EditSalaryChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalaryChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
