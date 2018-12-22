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
import { TokenStorageService } from 'src/app/services/login/token-storage.service';



@Component({
  selector: 'app-view-roles-and-resposibilities',
  templateUrl: './view-roles-and-resposibilities.component.html',
  styleUrls: ['./view-roles-and-resposibilities.component.css']
})

export class ViewRolesAndResposibilitiesComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  // displayedColumns: string[] = ['jobtitle', 'reportingto','responsibilityfor','location','keyactivities','currentproject','Previouslyworkedprojects'];

  // role = [
  //   { 'jobtitle':'JOB1', 'reportingto':'Manager','responsibilityfor':'RES1', 'location':'KANDY','keyactivities':'1', 'currentproject':'Proj1','Previouslyworkedprojects':'ProjA'},
  //   { 'jobtitle':'JOB2', 'reportingto':'AR','responsibilityfor':'RES2', 'location':'COLOMBO','keyactivities':'2', 'currentproject':'Proj2','Previouslyworkedprojects':'ProjB'},
  //   { 'jobtitle':'JOB3', 'reportingto':'Manager','responsibilityfor':'RES3', 'location':'JAFFNA','keyactivities':'3', 'currentproject':'Proj3','Previouslyworkedprojects':'ProjC'},
  //   { 'jobtitle':'JOB4', 'reportingto':'AR','responsibilityfor':'RES4', 'location':'VAVUNIA','keyactivities':'4', 'currentproject':'Proj4','Previouslyworkedprojects':'ProjD'},
  //   { 'jobtitle':'JOB5', 'reportingto':'HR','responsibilityfor':'RES5', 'location':'JAFFNA','keyactivities':'5', 'currentproject':'Proj5','Previouslyworkedprojects':'ProjE'},
  //   { 'jobtitle':'JOB6', 'reportingto':'HR','responsibilityfor':'RES6', 'location':'VAVUNIA','keyactivities':'6', 'currentproject':'Proj6','Previouslyworkedprojects':'ProjF'},
  //   { 'jobtitle':'JOB7', 'reportingto':'Manager','responsibilityfor':'RES7', 'location':'JAFFNA','keyactivities':'7', 'currentproject':'Proj7','Previouslyworkedprojects':'ProjG'}
  // ]
  // dataSource = new MatTableDataSource<any>(this.role);


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,
    private roleService:RolesAndResponsibilitiesService,
    private profileInfoService:ProfileInfoService,
    private jobService:JobService,
    private keyActivityService:KeyActivityService,
    private locationService:LocationService,
    private token: TokenStorageService
    ) { }
user:Number
info:any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getJob()
    // this.dataSource = new MatTableDataSource<any>(this.role);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.profileInfoService.profileuserObservable$.subscribe(userId=>{
      this.user=userId;
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
        this.getRolesAndResponsibilitiesByUserId(this.user);
      })
    }
    getDeleteId(data){
      this.rolesandResObj=Object.assign({},data);
      // alert(this.rolesandResObj.id)
    }
    editRolesAndResponsibilities(){
      this.rolesandResObj.user=this.user
      // this.rolesandResObj.job=1
      // this.rolesandResObj.keyActivity=1
      // this.rolesandResObj.location=1


      return this.roleService.editaRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
        this.getRolesAndResponsibilitiesByUserId(this.user)
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
