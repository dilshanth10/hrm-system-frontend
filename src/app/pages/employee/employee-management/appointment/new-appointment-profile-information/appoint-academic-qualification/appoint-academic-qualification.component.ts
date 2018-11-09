import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-academic-qualification',
  templateUrl: './appoint-academic-qualification.component.html',
  styleUrls: ['./appoint-academic-qualification.component.css']
})
export class AppointAcademicQualificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Previous(){
    this.router.navigate(['/appointment/appointmentAdd/generalInfo']);
  }
  Next(){
    this.router.navigate(['/appointment/appointmentAdd/professionalQualification']);
  }
}
