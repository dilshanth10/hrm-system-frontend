import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySkillLevelComponent } from './technology-skill-level.component';

describe('TechnologySkillLevelComponent', () => {
  let component: TechnologySkillLevelComponent;
  let fixture: ComponentFixture<TechnologySkillLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologySkillLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologySkillLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
