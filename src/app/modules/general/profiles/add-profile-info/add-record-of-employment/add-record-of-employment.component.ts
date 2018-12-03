import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewRecordOfEmploymentService } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.service';
import { ViewRecordOfEmployment } from '../../view-profile-info/view-record-of-employment/view-record-of-employment.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';

@Component({
  selector: 'app-add-record-of-employment',
  templateUrl: './add-record-of-employment.component.html',
  styleUrls: ['./add-record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {
  recordObj:ViewRecordOfEmployment=new ViewRecordOfEmployment()
  user:Profile[];
  constructor(private router: Router,
    private recordOfEmployeeService:ViewRecordOfEmploymentService,
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
  addRecordOfEmployeeMent(){
    return this.recordOfEmployeeService.addRecordOfEmployement(this.recordObj).subscribe(data=>{
      this.recordObj=data;
      this. clear();
    })
  }

  clear() {
    this.recordObj.workName= null;
    this.recordObj.periodYearTo = null;
    this.recordObj.periodYearFrom = null;
    this.recordObj.designation = null;
    this.recordObj.workType = null;
    this.recordObj.reasonForLeaving = null;
    this.recordObj.leavingSalary = null;
    this.recordObj.workPlace = null;
    this.recordObj.user = null;
    

  }

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/referees']);
  }

}
