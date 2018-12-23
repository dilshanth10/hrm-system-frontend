import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { RolesAndResponsibilitiesService } from './roles-and-responsibilities.service';
import { RolesAndResponsibilities } from './roles-and-responsibilities';
import { ProfileInfoService } from '../profile-table/profile-info.service';
import { JobService } from 'src/app/modules/employee/employee-management/appointment/service/job.service';
import { KeyActivityService } from 'src/app/modules/employee/employee-management/appointment/service/key-activity.service';
import { LocationService } from 'src/app/modules/employee/employee-management/appointment/service/location.service';
import { Profile } from '../profile-table/profile.model';
import { Job } from 'src/app/modules/employee/recruitment/Modal/job';
import { KeyActivity } from 'src/app/modules/employee/employee-management/appointment/models/key-activity.model';
import { Location } from 'src/app/modules/employee/employee-management/appointment/models/location.model';



@Component({
  selector: 'app-view-roles-and-resposibilities',
  templateUrl: './view-roles-and-resposibilities.component.html',
  styleUrls: ['./view-roles-and-resposibilities.component.css']
})

export class ViewRolesAndResposibilitiesComponent implements OnInit {

  constructor(private route:Router,
    private roleService:RolesAndResponsibilitiesService,
    private profileInfoService:ProfileInfoService,
    private jobService:JobService,
    private keyActivityService:KeyActivityService,
    private locationService:LocationService
    ) { }
userid:Number
  ngOnInit() {
    this.getJob()
    this.profileInfoService.profileuserObservable$.subscribe(userId=>{
      this.userid=userId;
      this.getRolesAndResponsibilitiesByUserId(userId);
    })
    this.getLocationId()
    this.getKeyActivityId()
  }
  job:Job[]
getJob(){
  this.jobService.getAllJob().subscribe(job=>{
    this.job=job
  })
}
keyActivity:KeyActivity[]
getKeyActivityId(){
  return this.keyActivityService.getAllKeyActivity().subscribe(data=>{
    this.keyActivity=data;
  })
}
locations:Location[];
getLocationId(){
  return this.locationService.getAllLocation().subscribe(data=>{
    this.locations=data;
  })  
}
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  roles:RolesAndResponsibilities[];
  getallRolesAndResponsibilites(){
    return this.roleService.getAllRolesandResponsibilities().subscribe(data=>{
      this.roles=data;
    })
  }
  getRolesAndResponsibilitiesByUserId(uid){
    return this.roleService.getRolesandResponsibilitiesByuserId(uid).subscribe(data=>{
      console.log(data);
      this.roles=data;
    })  }
    rolesandResObj:RolesAndResponsibilities= new RolesAndResponsibilities();
    deleteRolesAndResponsibilities(){
      return this.roleService.deleteRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
        this.getRolesAndResponsibilitiesByUserId(this.userid);
      })
    }
    getDeleteId(data){
      this.rolesandResObj=Object.assign({},data);
      alert(this.rolesandResObj.id)
    }
    editRolesAndResponsibilities(){
      this.rolesandResObj.user=this.userid
      return this.roleService.editaRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
        alert(this.rolesandResObj)
        this.getRolesAndResponsibilitiesByUserId(this.userid)
      })
    }
    userData:Profile[];
    getUserId(){
      return this.profileInfoService.getGenerelInfo().subscribe(data=>{
        this.userData=data;
      })
    }
  gotoNext(){
    this.route.navigate(['/profile/attachmentChecklist'])
  }
  goBack(){
    this.route.navigate(['/profile/referees'])
  }

}
