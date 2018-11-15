import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-record-applicant-cv',
  templateUrl: './record-applicant-cv.component.html',
  styleUrls: ['./record-applicant-cv.component.css']
})
export class RecordApplicantCvComponent implements OnInit {

  recordApplicantCv: FormGroup;
  constructor() { 
    this.recordApplicantCv = new FormGroup({
      'fullName': new FormControl,
      'email':new FormControl,
      'nic': new FormControl,
      'age': new FormControl,
      'dob': new FormControl,
      'qualification':new FormControl,
      'post': new FormControl,
      'attachCv': new  FormControl,
      'address': new FormControl,
    })
  }

  ngOnInit() {
  }

}
