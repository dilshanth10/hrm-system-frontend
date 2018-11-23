import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from './referee.model';
import { RefereesService } from './referees.service';


@Component({
  selector: 'app-view-referees',
  templateUrl: './view-referees.component.html',
  styleUrls: ['./view-referees.component.css']
})

export class ViewRefereesComponent implements OnInit {

  referees: Referee[]

  ngOnInit() {
    this.getReferee()
  }
  constructor(private router:Router,
    private refereeService:RefereesService
    ) { }

    getReferee(){
      return this.refereeService.getReferee().subscribe(data=>{
        this.referees=data;
      })
    }
  
  gotoNext(){
    this.router.navigate(['/profile/rolesAndResponse']);
  }
  goBack(){
    this.router.navigate(['/profile/recordEmp']);
  }

}
