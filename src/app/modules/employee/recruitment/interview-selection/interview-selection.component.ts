import { Component, OnInit, ViewChild } from '@angular/core';
import { InterviewSelectionService } from '../Service/interview-selection.service';
import { InterviewSelestionRejectedService } from '../Service/interview-selestion-rejected.service';
import { InterviewSelection } from '../Modal/interview-selection';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { JobService } from '../../employee-management/appointment/service/job.service';
import { HighestQualificationService } from '../Service/highest-qualification.service';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { Job } from '../Modal/job';
import { HighestQualification } from '../Modal/highest-qualification';


@Component({
  selector: 'app-interview-selection',
  templateUrl: './interview-selection.component.html',
  styleUrls: ['./interview-selection.component.css']
})
export class InterviewSelectionComponent implements OnInit {

  constructor(  
    private interviewSelectionServices: InterviewSelectionService,
    private interviewSelectionRejectedServices: InterviewSelestionRejectedService,
    private recordApplicantCvService: RecordApplicantCvService,
    private jobServices: JobService,
    private highQulificationServices: HighestQualificationService
  ) { }

  interviewSelectionObj = new InterviewSelection();
  recordOfApplicantObj = new RecordApplicantCv();
  recordOfApplicantAdd: RecordApplicantCv[];
  recordOfApplicantEdit = new RecordApplicantCv;

  job: Job[];
  hightQulification: HighestQualification[];
  
  ngOnInit() {
    this.getAllJobList();
    this.getAllHighQulificationList();
    this.getAllApplicantList();   

  }
 
  createApplicantSelectedCv() {
    //this.recordOfApplicantObj.dateOfBirth=new Date(this.recordOfApplicantObj.dateOfBirth)
    this.interviewSelectionServices.postSelectedApplicants(this.interviewSelectionObj).subscribe(dataOfSelectedApplicant => {
      alert("Applicant CV's Selected");
      console.log(dataOfSelectedApplicant);
    })

  }

  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }

  editStatus(applicantCvData) {
    this.recordOfApplicantObj = Object.assign({}, applicantCvData);
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

}
