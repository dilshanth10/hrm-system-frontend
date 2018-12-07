import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AccademicQualificationService } from './accademic-qualification.service';
import { AcademicQualification } from './academic-qualification';
import { ProfileInfoService } from '../profile-table/profile-info.service';
import { ExamTypeService } from '../../add-profile-info/add-academic-qualification/exam-type.service';
import { ExamType } from '../../add-profile-info/add-academic-qualification/exam-type.model';

@Component({
  selector: 'app-view-academic-qualification',
  templateUrl: './view-academic-qualification.component.html',
  styleUrls: ['./view-academic-qualification.component.css']
})

export class ViewAcademicQualificationComponent implements OnInit {

  academicQualifications: AcademicQualification[];
  academicObj=new AcademicQualification();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private academicService: AccademicQualificationService,
    private profileInfoService: ProfileInfoService,
    private examTypeService:ExamTypeService) { }

    UserId:Number;
  ngOnInit() {

    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this.GetAcademicQualificationByUserId(userid);
      this.UserId=userid;
    })
    this.getExamTypeByid()
  }
  GetAcademicQualificationByUserId(uid) {
    return this.academicService.getAcademicQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.academicQualifications = data;
    })
  }
  examtype:ExamType[]
  getExamTypeByid(){
    return this.examTypeService.viewExamtypes().subscribe(data=>{
      this.examtype=data
    })
  }
  // getAllAcademicQualification() {
  //   this.academicService.getAcademicQualification().subscribe(data => {
  //     this.academicQualifications = data;
  //   })
  // }
  gotoNext() {
    this.router.navigate(['/profile/ProfQual']);
  }

  goBack() {
    this.router.navigate(['/profile/genInf']);
  }
  getAcadamicId(data){
    this.academicObj=Object.assign({},data);
  }
  editAcadamicQualification(){
    this.academicObj.user=this.UserId;
    // this.academicObj.examType=1;
    this.academicService.updateAcademicQualification(this.academicObj).subscribe(data=>{
      this.GetAcademicQualificationByUserId(this.UserId)
    })
  }
  deleteAcadamicQualification(){
    this.academicService.deleteAcademicQualificationa(this.academicObj).subscribe(data=>{
      alert(this.academicObj.id)
      this.GetAcademicQualificationByUserId(this.UserId)
    })
  }
}
