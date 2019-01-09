import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExamType } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.model';
import { ExamTypeService } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.service';
import { Router } from '@angular/router';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { AcademicQualificationService } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/academic-qualification.service';
import { AcademicQualification } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/academic-qualification.model';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AddAcademicQualificationComponent implements OnInit {
  examtypes: ExamType[];
  trainerAcademicObj: AcademicQualification = new AcademicQualification();
  user: Profile[];
  

  constructor(private router: Router,
    private examtypeService: ExamTypeService,
    private academicService: AcademicQualificationService,
    private userService: ProfileInfoService
  ) { }

  ngOnInit() {
    this.getUserId();
    this.getExamTypes();
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }

  addTrainerAcademicForm = new FormGroup({
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

  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
      this.trainerAcademicObj.user =0;
    })
  }

  createAcademicQualification() {
    this.academicService.addAcademicQualification(this.trainerAcademicObj)
      .subscribe(data => {
        console.log(data);
        // alert("created");
        // this.next();
        this.responseMsg = "success";
        
        this.responseMsgTimeOut();
        this.clear();
        
        
        });
        this.responseMsg = "fail";
        this.responseMsgTimeOut();
  }

  getExamTypes() {
    return this.examtypeService.viewExamtypes().subscribe(data => {
      this.examtypes = data;
      this.trainerAcademicObj.examTypeId = 0
    })
  }
  // previous() {
  //   this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
  // }

  // next() {
  //   this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  // }

  clear() {
    this.trainerAcademicObj.examTypeId = null;
    this.trainerAcademicObj.periodYearTo = null;
    this.trainerAcademicObj.periodYearFrom = null;
    this.trainerAcademicObj.result = null;
    this.trainerAcademicObj.schoolName = null;
    this.trainerAcademicObj.user = null;
    this.trainerAcademicObj.examinationYear = null;
  }

}
