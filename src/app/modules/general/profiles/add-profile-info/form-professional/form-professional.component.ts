import { Component, OnInit } from '@angular/core';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ViewProfessionalMembershipService } from '../../view-profile-info/view-professional-membership/view-professional-membership.service';
import { ViewProfessionalMembership } from '../../view-profile-info/view-professional-membership/view-professional-membership';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {
  
membershipObj:ViewProfessionalMembership=new ViewProfessionalMembership();
user:Profile[];

  constructor( 
    private professionalMembershipService: ViewProfessionalMembershipService,
    private userService:ProfileInfoService
    ) { }

  ngOnInit() {
    this.getUserId();
  }
  addProMembership(){
    
    return this.professionalMembershipService.createProMembership(this.membershipObj).subscribe(data=>{
      console.log(data);
      this.clear();
      
    })
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }

  clear() {
    this.membershipObj.eventName= null;
    this.membershipObj.periodYearTo = null;
    this.membershipObj.periodYearFrom = null;
    this.membershipObj.eventType = null;
    this.membershipObj.organizationName = null;
    this.membershipObj.user = null;
    this.membershipObj.award = null;
  }
}
