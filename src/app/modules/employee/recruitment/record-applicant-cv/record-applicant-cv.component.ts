import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';
import { Job } from '../Modal/job';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-record-applicant-cv',
  templateUrl: './record-applicant-cv.component.html',
  styleUrls: ['./record-applicant-cv.component.css']
})
export class RecordApplicantCvComponent implements OnInit {
  recordOfApplicantObj = new RecordApplicantCv;
  recordOfApplicantAdd: RecordApplicantCv[];
  recordOfApplicantEdit = new RecordApplicantCv;

  jod:Job[];
  constructor(private recordApplicantCvService: RecordApplicantCvService,
    private jobServices:JobService
    ) {


  }

  ngOnInit() {

  }
  addApplicantCv() {
    this.recordApplicantCvService.postApplicants(this.recordOfApplicantObj).subscribe(addRecordOfApplicant => {
      console.log(addRecordOfApplicant);
    });

  }

  getAllApplicantList() {
    this.recordApplicantCvService.getAllApplicants().subscribe(data => {
      this.recordOfApplicantAdd = data;
      console.log(data);
    });
  }

  deleteApplicantById(deleteApplicant) {
    this.recordApplicantCvService.deleteApplicants(deleteApplicant).subscribe(data => {
      this.recordOfApplicantObj.id = deleteApplicant.id;
      // alert("User deleted");
      this.getAllApplicantList();
    });

  }

  editStatus(usr) {
    this.recordOfApplicantObj = Object.assign({}, usr);
  }

  updateApplicantById() {
    this.recordApplicantCvService.updateApplicants(this.recordOfApplicantObj).subscribe(data => {
      // alert("User updated"); 
      this.getAllApplicantList();
    });

  }
  getAllJob() {
    this.jobServices.getAllJob().subscribe(data => {
      this.jod = data;
      console.log(data);
    });
  }


}
