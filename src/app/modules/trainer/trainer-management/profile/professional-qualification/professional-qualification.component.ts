import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessionalQualification } from 'src/app/modules/general/profiles/view-profile-info/view-professional-qualification/professional-qualification.model';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ProfessionalQualificationService } from 'src/app/modules/general/profiles/view-profile-info/view-professional-qualification/professional-qualification.service';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.css']
})
export class ProfessionalQualificationComponent implements OnInit {
  professional: ProfessionalQualification[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  userId:Number

  constructor(private router: Router, 
    private professionalQualificationService: ProfessionalQualificationService,
    private profileInfoService:ProfileInfoService) { }

  ngOnInit() {
    this.getTrainerProQualification();
    
  }

  gotoNext() {
    this.router.navigate(['/profile/recordEmp']);
  }
  goBack() {
    this.router.navigate(['/profile/academicQual']);
  }

  GetProfessionalQualificationByUserId(uid) {
    return this.professionalQualificationService.getEmpProQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.professional = data;
    })
  }
  getTrainerProQualification() {
    this.professionalQualificationService.getAllEmpProQualification().subscribe(data => {
      this.professional = data;
      console.log(data);
    })

  }
  getproQualificationId(data){
    this.profesionalObj=Object.assign({},data)
  }
  profesionalObj=new ProfessionalQualification();
  editproQualification(){
    // this.profesionalObj.user=this.userId;
    return this.professionalQualificationService.editProQualification(this.profesionalObj).subscribe(data=>{
      // this.GetProfessionalQualificationByUserId(this.userId);
      this.getTrainerProQualification();
    })
  }
  deleteproQualification(){
    return this.professionalQualificationService.deleteProQualification(this.profesionalObj).subscribe(data=>{
      // this.GetProfessionalQualificationByUserId(this.userId);
      this.getTrainerProQualification();
    })
  }

}
