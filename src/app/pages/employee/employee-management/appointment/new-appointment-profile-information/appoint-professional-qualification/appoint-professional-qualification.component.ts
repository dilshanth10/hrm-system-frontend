import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-professional-qualification',
  templateUrl: './appoint-professional-qualification.component.html',
  styleUrls: ['./appoint-professional-qualification.component.css']
})
export class AppointProfessionalQualificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Previous(){
    this.router.navigate(['/appointment/appointmentAdd/academicInfo']);
  }
  Next(){
    this.router.navigate(['/appointment/appointmentAdd/recordOfEmp']);
  }
}
