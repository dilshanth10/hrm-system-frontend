import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css']
})
export class RefereesComponent implements OnInit {

 

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
