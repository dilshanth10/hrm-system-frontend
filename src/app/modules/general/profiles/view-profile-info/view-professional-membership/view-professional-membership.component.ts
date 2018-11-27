import { Component, OnInit } from '@angular/core';
import { ViewProfessionalMembership } from './view-professional-membership';
import { ViewProfessionalMembershipService } from './view-professional-membership.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-professional-membership',
  templateUrl: './view-professional-membership.component.html',
  styleUrls: ['./view-professional-membership.component.css']
})
export class ViewProfessionalMembershipComponent implements OnInit {
  memberships:ViewProfessionalMembership[];

  constructor(private router: Router, private professionalMembershipService: ViewProfessionalMembershipService) { }

  ngOnInit() {
    this.getProMembership();
  }

  getProMembership(){
    this.professionalMembershipService.getAllProMembership().subscribe(data=>{
      this.memberships=data;
      console.log(data);
    })
  }

}
