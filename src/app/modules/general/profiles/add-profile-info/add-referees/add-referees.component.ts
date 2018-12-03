import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereesService } from '../../view-profile-info/view-referees/referees.service';
import { Referee } from '../../view-profile-info/view-referees/referee.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';

@Component({
  selector: 'app-add-referees',
  templateUrl: './add-referees.component.html',
  styleUrls: ['./add-referees.component.css']
})
export class RefereesComponent implements OnInit {
  refObj:Referee=new Referee();
  userObj:Profile=new Profile();
  user:Profile[];
  constructor(private router: Router,
    private refereeService:RefereesService,
    private generalService:ProfileInfoService
    ) { }

  ngOnInit() {
    this.getUserId()

  }
  addReferee(){
    // this.refObj.user=1;
    return this.refereeService.addReferee(this.refObj).subscribe(data=>{
      this.refObj=data;
    
    })
  }
  getUserId(){
    return this.generalService.getGenerelInfo().subscribe(data=>{
      this.user=data;
      console.log(data);
      // this.userObj.id=0;
    })
  }
  
  previous() {
    this.router.navigate(['/appointment/appointmentInformation/recordOfEmp']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/attachment']);
  }

}
