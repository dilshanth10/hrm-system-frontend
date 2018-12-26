import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewProfessionalMembership } from 'src/app/modules/general/profiles/view-profile-info/view-professional-membership/view-professional-membership';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { ViewProfessionalMembershipService } from 'src/app/modules/general/profiles/view-profile-info/view-professional-membership/view-professional-membership.service';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {
  trainermembershipObj: ViewProfessionalMembership = new ViewProfessionalMembership();
  user: Profile[];

  constructor(private professionalMembershipService: ViewProfessionalMembershipService,
    private userService: ProfileInfoService) { }

  ngOnInit() {
  }
  responseMsg: string
  responseMsgTimeOut() {
    setTimeout(() => {
      this.responseMsg = null;
    }, 3000);
  }
  addprofForm = new FormGroup({
    empName: new FormControl('', Validators.compose([
      Validators.required,
      // Validators.minLength(3)
    ])),
    university: new FormControl('', Validators.compose([
      Validators.required,
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
    eventtype: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    eventname: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    nameOfaward: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("^[0-9]*$")
      // Validators.maxLength(50),
      // Validators.minLength(3)
    ]))
  });

  addProMembership() {

    return this.professionalMembershipService.createProMembership(this.trainermembershipObj).subscribe(data => {
      console.log(data);
      this.clear();
      this.responseMsg = "success";
      this.responseMsgTimeOut();
      this.clear();

    });
    this.responseMsg = "fail";
    this.responseMsgTimeOut();
  }
  getUserId() {
    return this.userService.getGenerelInfo().subscribe(data => {
      this.user = data;
      this.trainermembershipObj.user = 0;
    })
  }

  clear() {
    this.trainermembershipObj.eventName = null;
    this.trainermembershipObj.periodYearTo = null;
    this.trainermembershipObj.periodYearFrom = null;
    this.trainermembershipObj.eventType = null;
    this.trainermembershipObj.organizationName = null;
    this.trainermembershipObj.user = null;
    this.trainermembershipObj.award = null;
    this.trainermembershipObj.eventName = null;

  }
  
}
