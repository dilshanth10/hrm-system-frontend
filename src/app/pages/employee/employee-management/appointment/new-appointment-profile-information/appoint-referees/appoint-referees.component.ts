import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-referees',
  templateUrl: './appoint-referees.component.html',
  styleUrls: ['./appoint-referees.component.css']
})
export class AppointRefereesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Previous(){
    this.router.navigate(['/appointment/appointmentAdd/recordOfEmp']);
  }
  Next(){
    this.router.navigate(['/appointment/appointmentAdd/appointmentAddAttach']);
  }

}
