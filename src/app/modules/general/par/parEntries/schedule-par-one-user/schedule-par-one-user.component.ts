import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';

@Component({
  selector: 'app-schedule-par-one-user',
  templateUrl: './schedule-par-one-user.component.html',
  styleUrls: ['./schedule-par-one-user.component.css']
})
export class ScheduleParOneUserComponent implements OnInit {

  parConfigArray:ParConfig[];

  firstFormGroup: FormGroup=new FormGroup({
    empId:new FormControl(),
    empName:new FormControl(),
    parDate:new FormControl(),
    parTime:new FormControl()
  });
  secondFormGroup: FormGroup;

  constructor(private parConfigService:ParconfigService) {}

  ngOnInit() {

    this.parConfigService.getParConfig().subscribe(data=>{
this.parConfigArray=data;
    })
  
  }

}
