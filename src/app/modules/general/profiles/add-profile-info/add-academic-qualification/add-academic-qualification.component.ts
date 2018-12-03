import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicQualificationService } from './academic-qualification.service';
import { AcademicQualification } from './academic-qualification.model';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

  academicObj:AcademicQualification=new AcademicQualification();
  user:Profile[];
  constructor(private router:Router,
    private academicService:AcademicQualificationService,
    private userService:ProfileInfoService
    ) { }
 

 
  ngOnInit() {
    this.getUserId()
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }
    createAcademicQualification(){
      this.academicService.addAcademicQualification(this.academicObj)
      .subscribe(data=>{
        // console.log(data);
        // alert("created");
        // this.next();
        this.clear();
      })
    }

    previous() {
      this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
    }
  
    next() {
      this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
    }

    clear() {
      this.academicObj.examTypeId= null;
      this.academicObj.periodYearTo = null;
      this.academicObj.periodYearFrom = null;
      this.academicObj.result = null;
      this.academicObj.schoolName = null;
      this.academicObj.user = null;
      this.academicObj.examinationYear = null;
    }
  
}
