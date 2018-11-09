import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalaryChatComponent } from './create-salary-chat.component';

describe('CreateSalaryChatComponent', () => {
  let component: CreateSalaryChatComponent;
  let fixture: ComponentFixture<CreateSalaryChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalaryChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalaryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
