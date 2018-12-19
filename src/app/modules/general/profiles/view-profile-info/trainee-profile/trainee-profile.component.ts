import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ProfileInfoService } from '../profile-table/profile-info.service';
import { RefereesService } from '../view-referees/referees.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { Profile } from '../profile-table/profile.model';

@Component({
  selector: 'app-trainee-profile',
  templateUrl: './trainee-profile.component.html',
  styleUrls: ['./trainee-profile.component.css']
})
export class TraineeProfileComponent implements OnInit {
  userpassId
  employees: Profile[] ;
  user= new Profile();
  users:Profile[];
  info: any;
  
  constructor(private router:Router,
    private generalInfoService:ProfileInfoService,
    private refereeService:RefereesService,
    private route:ActivatedRoute,
    private token: TokenStorageService) { }

  ngOnInit() {
    
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getAllUser();
    this.getUserListByName();
    // if(this.info.authorities==='EMPLOYEE'){
    //   this.getUserListByName(this.info.username);
    // }
    // else{
    //   this.getAllUser();
    // }
  }

  
  onClick(empId:number){
    this.userpassId = this.generalInfoService.useSelectedUserId(empId);
    this.router.navigate([empId],{relativeTo:this.route});
    
   }
  //  getUserListById(){
  //   return this.generalInfoService.getUserListById(this.user).subscribe(data=>{
  //     this.user=data;
  //   })
  //  }
   getUserListByName(){
    return this.generalInfoService.getUserListByname(this.info.username).subscribe(data=>{
      // this.users=Object.assign({},data)
      this.users=data;
      console.log(this.users)
    })
   }
   
   getAllUser(){
     
     this.generalInfoService.getGenerelInfo().subscribe(data=>{
       console.log(data);
      this.employees=data;
    })
  }
  
  getUserById(id){
    this.generalInfoService.getUserById(id).subscribe(data=>{
      
    })
  }
  GenralInfo(id){
    this.router.navigate(['emp']);
  }
}
