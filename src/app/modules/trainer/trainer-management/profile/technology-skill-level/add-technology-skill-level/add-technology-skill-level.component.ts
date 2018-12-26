import { Component, OnInit } from '@angular/core';
import { TechnologySkillLevel } from 'src/app/modules/trainer/Model/technology-skill-level';
import { Router } from '@angular/router';
import { TechnologySkillLevelService } from 'src/app/modules/trainer/Service/technology-skill-level.service';

@Component({
  selector: 'app-add-technology-skill-level',
  templateUrl: './add-technology-skill-level.component.html',
  styleUrls: ['./add-technology-skill-level.component.css']
})
export class AddTechnologySkillLevelComponent implements OnInit {

  technologySkillObj: TechnologySkillLevel = new TechnologySkillLevel();
  constructor(private router: Router,
    private technology: TechnologySkillLevelService) { }

  ngOnInit() {
  }
  createTechnologySkillLevel() {
    this.technology.createTechnologySkillLevel(this.technologySkillObj).subscribe(data => {
      console.log(data);
    });
  }
}