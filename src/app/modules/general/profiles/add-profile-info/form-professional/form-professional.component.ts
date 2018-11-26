import { Component, OnInit } from '@angular/core';
import { ProfessionalQualification } from '../../view-profile-info/view-professional-qualification/professional-qualification.model';
import { ProfessionalQualificationService } from '../../view-profile-info/view-professional-qualification/professional-qualification.service';
import { ViewProfessionalMembershipService } from '../../view-profile-info/view-professional-membership/view-professional-membership.service';
import { ViewProfessionalMembership } from '../../view-profile-info/view-professional-membership/view-professional-membership';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {
  
membershipObj:ViewProfessionalMembership=new ViewProfessionalMembership();

  constructor( 
    private professionalMembershipService: ViewProfessionalMembershipService) { }

  ngOnInit() {
  }
  addProMembership(){
    
    return this.professionalMembershipService.createProMembership(this.membershipObj).subscribe(data=>{
      console.log(data);
      
    })
  }
}
