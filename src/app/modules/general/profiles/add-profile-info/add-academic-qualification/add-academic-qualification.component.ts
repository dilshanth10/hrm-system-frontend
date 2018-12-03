import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicQualificationService } from './academic-qualification.service';
import { AcademicQualification } from './academic-qualification.model';
import { ExamTypeService } from './exam-type.service';
import { ExamType } from './exam-type.model';


@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

  constructor(private router:Router,
    private academicService:AcademicQualificationService,
    private examtypeService:ExamTypeService) { }

  academicObj:AcademicQualification=new AcademicQualification();
  examtypes:ExamType[];
  previous() {
    this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }

  ngOnInit() {
    this.getExamTypes();
  }

    createAcademicQualification(){
      this.academicService.addAcademicQualification(this.academicObj)
      .subscribe(data=>{
        console.log(data);
        alert("created");
        this.next();
      })
    }

    getExamTypes(){
      return this.examtypeService.viewExamtypes().subscribe(data=>{
        console.log(data);
        this.examtypes=data;
      })
    }
}
