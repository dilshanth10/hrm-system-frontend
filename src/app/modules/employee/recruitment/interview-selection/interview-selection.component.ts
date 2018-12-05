import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { JobService } from '../../employee-management/appointment/service/job.service';
import { HighestQualificationService } from '../Service/highest-qualification.service';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';

@Component({
  selector: 'app-interview-selection',
  templateUrl: './interview-selection.component.html',
  styleUrls: ['./interview-selection.component.css']
})
export class InterviewSelectionComponent implements OnInit {

  constructor(private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService) { }

  recordOfApplicantObj = new RecordApplicantCv();
  recordOfApplicantAdd: RecordApplicantCv[];
  recordOfApplicantEdit = new RecordApplicantCv;

  job: any[];
  hightQulification: any[];

  ngOnInit() {
    this.getAllJobList();
    this.getAllHighQulificationList();
    this.getAllApplicantList();
    
  }
  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }
  getAllJobList() {
    this.jobServices.getAllJob().subscribe(data => {
      this.job = data;
      console.log(data);
    });
  }

  getAllHighQulificationList() {
    this.highQulificationServices.getAllHighestQualification().subscribe(datahighQulification => {
      this.hightQulification = datahighQulification;
      console.log(datahighQulification);
    });
  }
  editStatus(applicn) {
    this.recordOfApplicantObj = Object.assign({}, applicn);
  }
 
}
