import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AcademicQualification } from '../../profile/add-profile-info/add-academic-qualification/academic-qualification.model';

@Component({
  selector: 'app-add-attendance-details',
  templateUrl: './add-attendance-details.component.html',
  styleUrls: ['./add-attendance-details.component.css']
})
export class AddAttendanceDetailsComponent implements OnInit {
  addAca = new FormGroup({
    school: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    fromyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    toyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    resultOpt: new FormControl('', Validators.compose([
      Validators.required])),

    empName: new FormControl('', Validators.compose([
      Validators.required,
    ])),

    examType: new FormControl('', Validators.compose([
      Validators.required])),

    examYear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
  });
  academicObj:AcademicQualification;
  constructor() { }

  ngOnInit() {
  }

}
