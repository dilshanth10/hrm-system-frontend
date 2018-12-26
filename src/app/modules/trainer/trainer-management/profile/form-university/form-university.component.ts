import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfessionalQualification } from 'src/app/modules/general/profiles/view-profile-info/view-professional-qualification/professional-qualification.model';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { ProfessionalQualificationService } from 'src/app/modules/general/profiles/view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-form-university',
  templateUrl: './form-university.component.html',
  styleUrls: ['./form-university.component.css']
})
export class FormUniversityComponent implements OnInit {
  trainerprofesionalObj: ProfessionalQualification = new ProfessionalQualification();
  user: Profile[];

  constructor(private professionalQualificationService: ProfessionalQualificationService,
    private userService: ProfileInfoService) { }

  ngOnInit() {
    this.getUserId();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
      this.trainerprofesionalObj.user = 0
    })
  }
  
  addUserForm = new FormGroup({
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      // Validators.pattern('^[a-z]*$')
    ])),
    universityName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
    ])),
    courseName: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    from: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    to: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    courseType: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    examinationYear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.minLength(4),
      Validators.maxLength(4)
    ])),
    subject: new FormControl('', Validators.compose([
      Validators.required
    ])),
    gpa: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      // Validators.pattern(^[0-9]*$),
      Validators.maxLength(4)
    ]))


  });
  addEmpProQualification() {

    return this.professionalQualificationService.createEmpProQualification(this.trainerprofesionalObj).subscribe(data => {
      console.log(data);
      // alert("added");
      this.clear()
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();

    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  clear() {
    this.trainerprofesionalObj.courseName = null;
    this.trainerprofesionalObj.periodYearTo = null;
    this.trainerprofesionalObj.periodYearFrom = null;
    this.trainerprofesionalObj.result = null;
    this.trainerprofesionalObj.gpa = null;
    this.trainerprofesionalObj.user = null;
    this.trainerprofesionalObj.insituteName = null;
    this.trainerprofesionalObj.courseType = null;
    this.trainerprofesionalObj.examinationYear = null;

  }

}
