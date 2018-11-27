import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RecordApplicantCv } from '../Modal/record-applicant-cv';
import { RecordApplicantCvService } from '../Service/record-applicant-cv.service';

@Component({
  selector: 'app-record-applicant-cv',
  templateUrl: './record-applicant-cv.component.html',
  styleUrls: ['./record-applicant-cv.component.css']
})
export class RecordApplicantCvComponent implements OnInit {
  recordOfApplicantObj: RecordApplicantCv;
  recordOfApplicantAdd: RecordApplicantCv[];
  recordOfApplicantEdit: RecordApplicantCv;
  constructor(private recordApplicantCvService: RecordApplicantCvService) {


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

}
