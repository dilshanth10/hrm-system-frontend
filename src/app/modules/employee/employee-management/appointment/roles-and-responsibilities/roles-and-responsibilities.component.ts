import { Component, OnInit } from '@angular/core';
import { RolesAndResponsibilitiesService } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities.service';
import { RolesAndResponsibilities } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';

@Component({
  selector: 'app-roles-and-responsibilities',
  templateUrl: './roles-and-responsibilities.component.html',
  styleUrls: ['./roles-and-responsibilities.component.css']
})
export class RolesAndResponsibilitiesComponent implements OnInit {

  user:Profile[];
  rolesandResObj:RolesAndResponsibilities=new RolesAndResponsibilities
  constructor(private rolesandResponsibilityService:RolesAndResponsibilitiesService,
    private userService:ProfileInfoService) { }

  ngOnInit() {
    this.getUserId();
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }

  addRolesAndResponsibilities(){
    return this.rolesandResponsibilityService.addRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
      this.rolesandResObj=data;
      this.clear();
    })
  }

  clear() {
    this.rolesandResObj.user= null;
    this.rolesandResObj.job = null;
    this.rolesandResObj.keyActivity = null;
    this.rolesandResObj.location = null;
    this.rolesandResObj.responsibility = null;
    this.rolesandResObj.overAllPurpose = null;
  }
}
