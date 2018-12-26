import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ViewProfessionalMembership } from 'src/app/modules/general/profiles/view-profile-info/view-professional-membership/view-professional-membership';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { ViewProfessionalMembershipService } from 'src/app/modules/general/profiles/view-profile-info/view-professional-membership/view-professional-membership.service';

@Component({
  selector: 'app-professional-menber-ships',
  templateUrl: './professional-menber-ships.component.html',
  styleUrls: ['./professional-menber-ships.component.css']
})
export class ProfessionalMenberShipsComponent implements OnInit {

  trainerMemberships:ViewProfessionalMembership[];

  constructor(private router: Router, 
    private profileInfoService:ProfileInfoService,
    private professionalMembershipService: ViewProfessionalMembershipService) { }
    userid:Number
  ngOnInit() {
    this.getProMembership();
   
  }
  
  getProMembershipByUserId(uid){
    this.professionalMembershipService.getProMembershipByUserId(uid).subscribe(data=>{
      this.trainerMemberships=data;
      console.log(data);
    })
  }
  getProMembership(){
    this.professionalMembershipService.getAllProMembership().subscribe(data=>{
      this.trainerMemberships=data;
      console.log(data);
    })
  }
  membershipObj=new ViewProfessionalMembership();
  getProId(data){
    this.membershipObj=Object.assign({},data)
  }
  editProMembership(){
    this.membershipObj.user=this.userid
    this.professionalMembershipService.editProMembership(this.membershipObj).subscribe(data=>{
      this.getProMembershipByUserId(this.userid)
      this.getProMembership();
    })
  }
  deleteProMembership(){
    this.professionalMembershipService.deleteProMembership(this.membershipObj).subscribe(data=>{
      this.getProMembershipByUserId(this.userid)
    })
  }
}
