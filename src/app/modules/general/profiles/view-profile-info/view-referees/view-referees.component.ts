import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from './referee.model';



@Component({
  selector: 'app-view-referees',
  templateUrl: './view-referees.component.html',
  styleUrls: ['./view-referees.component.css']
})

export class ViewRefereesComponent implements OnInit {

 referees:Referee[];

  ngOnInit() {
    
  }
  constructor(private router:Router) { }

  gotoNext(){
    this.router.navigate(['/profile/rolesAndResponse']);
  }
  goBack(){
    this.router.navigate(['/profile/recordEmp']);
  }

  
 
}
