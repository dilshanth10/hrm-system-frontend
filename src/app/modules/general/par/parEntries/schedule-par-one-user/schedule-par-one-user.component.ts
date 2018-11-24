import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';
import { SchedulePar } from '../../models/schedule-par.model';
import { ScheduleParAppraisors } from '../../models/schedule-par-appraisors.model';
import { ScheduleParContent } from '../../models/schedule-par-content.model';

@Component({
  selector: 'app-schedule-par-one-user',
  templateUrl: './schedule-par-one-user.component.html',
  styleUrls: ['./schedule-par-one-user.component.css']
})
export class ScheduleParOneUserComponent implements OnInit {

  scheduleParObj:SchedulePar=new SchedulePar();
  objApp1:ScheduleParAppraisors=new ScheduleParAppraisors();
  objApp2:ScheduleParAppraisors=new ScheduleParAppraisors();

  objCon1:ScheduleParContent=new ScheduleParContent();
  objCon2:ScheduleParContent=new ScheduleParContent();
  parConfigArray:ParConfig[];

  firstFormGroup: FormGroup=new FormGroup({
    parId:new FormControl(),
    empId:new FormControl(),
    parDate:new FormControl(),
    parTime:new FormControl(),
    checklist:new FormArray([

    ])
  });
  secondFormGroup: FormGroup;

  constructor(private parConfigService:ParconfigService) {}

 

  ngOnInit() {

    this.parConfigService.getParConfig().subscribe(data=>{
      this.parConfigArray=data;
    })
  
  }

  getFormData(){
    this.scheduleParObj.id=this.firstFormGroup.value.parId;
    this.scheduleParObj.empId=this.firstFormGroup.value.empId;
    this.scheduleParObj.scheduleDate=new Date(this.firstFormGroup.value.parDate);


    this.objApp1.appraisorId="A001";
    this.scheduleParObj.scheduleParAppraisorsList.push(this.objApp1);

  
   
    this.objApp2.appraisorId="A002";
    this.scheduleParObj.scheduleParAppraisorsList.push(this.objApp2);

   
    this.objCon1.parContentId="C001";
   

    this.scheduleParObj.scheduleParContentList.push(this.objCon1);

    
  
    this.objCon2.parContentId="C002";
  
    this.scheduleParObj.scheduleParContentList.push(this.objCon2);
  }

  checkboxPush(){

  }

}
