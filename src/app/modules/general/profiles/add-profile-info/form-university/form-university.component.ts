import { Component, OnInit } from '@angular/core';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';

import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';

@Component({
  selector: 'app-form-university',
  templateUrl: './form-university.component.html',
  styleUrls: ['./form-university.component.css']
})
export class FormUniversityComponent implements OnInit {
  profesionalObj:ProfessionalQualification=new ProfessionalQualification();
  user:Profile[];
  constructor(
    private professionalQualificationService:ProfessionalQualificationService,
    private userService:ProfileInfoService
    ) { }

  ngOnInit() {
   this.getUserId();
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }

  addEmpProQualification(){
    
    return this.professionalQualificationService.createEmpProQualification(this.profesionalObj).subscribe(data=>{
      console.log(data);
      // alert("added");
      this.clear() 
      
    })
  }
  clear() {
    this.profesionalObj.courseName= null;
    this.profesionalObj.periodYearTo = null;
    this.profesionalObj.periodYearFrom = null;
    this.profesionalObj.result = null;
    this.profesionalObj.gpa = null;
    this.profesionalObj.user = null;
    this.profesionalObj.insituteName = null;
    this.profesionalObj.courseType = null;
    this.profesionalObj.examinationYear = null;

  }


 
}
