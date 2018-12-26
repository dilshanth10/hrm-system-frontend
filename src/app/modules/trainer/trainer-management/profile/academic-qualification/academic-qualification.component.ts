import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { ExamTypeService } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.service';
import { ExamType } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/exam-type.model';
import { AcademicQualificationService } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/academic-qualification.service';
import { AcademicQualification } from 'src/app/modules/general/profiles/add-profile-info/add-academic-qualification/academic-qualification.model';

@Component({
  selector: 'app-academic-qualification',
  templateUrl: './academic-qualification.component.html',
  styleUrls: ['./academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {
  academicQualifications: AcademicQualification[];
  academicQualObj=new AcademicQualification();
  examtypes:ExamType[];
  userId:Number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private router: Router,
    private academicService: AcademicQualificationService,
    private profileInfoService: ProfileInfoService,
    private examTypeService:ExamTypeService) { }


  ngOnInit() {
    // this.profileInfoService.profileuserObservable$.subscribe(userid => {
    //   this.userId=userid;
    //   this.GetAcademicQualificationByUserId(userid);      
    // })
    this.getExamTypeByid(),
    this. GetAcademicQualification()
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  GetAcademicQualificationByUserId(uid) {
    return this.academicService.getAcademicQualificationByUserId(uid).subscribe(data => {
      this.academicQualifications = data;
      console.log(data);
      
    })
  }
  GetAcademicQualification() {
    return this.academicService.getAcademicQualification().subscribe(data => {
      this.academicQualifications = data;
      console.log(data);
      
    })
  }
  
  getExamTypeByid(){
    return this.examTypeService.viewExamtypes().subscribe(data=>{
      console.log(data);
      this.examtypes=data
    })
  }
  // getAllAcademicQualification() {
  //   this.academicService.getAcademicQualification().subscribe(data => {
  //     this.academicQualifications = data;
  //   })
  // }
  getAcadamicId(data){
    this.academicQualObj=Object.assign({},data);
    console.log(this.academicQualObj.examTypeId)
    // alert( this.academicQualObj.id)
  }
  updateAcademicQualification(){
    // this.academicQualObj.user=this.UserId;
     this.academicService.updateAcademicQualification(this.academicQualObj).subscribe(data=>{
      // this.GetAcademicQualificationByUserId(this.UserId)
      this.GetAcademicQualification();
    });
  }
  deleteAcadamicQualification(){
    this.academicService.deleteAcademicQualificationa(this.academicQualObj).subscribe(data=>{
      // this.GetAcademicQualificationByUserId(this.UserId)
      this.GetAcademicQualification();
    });
  }

  // gotoNext() {
  //   this.router.navigate(['/profile/ProfQual']);
  // }

  // goBack() {
  //   this.router.navigate(['/profile/genInf']);
  // }
}