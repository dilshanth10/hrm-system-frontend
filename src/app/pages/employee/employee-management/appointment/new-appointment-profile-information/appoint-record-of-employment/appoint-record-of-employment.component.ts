import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-record-of-employment',
  templateUrl: './appoint-record-of-employment.component.html',
  styleUrls: ['./appoint-record-of-employment.component.css']
})
export class AppointRecordOfEmploymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Previous(){
    this.router.navigate(['/appointment/appointmentAdd/professionalQualification']);
  }
  Next(){
    this.router.navigate(['/appointment/appointmentAdd/referees']);
  }
}
