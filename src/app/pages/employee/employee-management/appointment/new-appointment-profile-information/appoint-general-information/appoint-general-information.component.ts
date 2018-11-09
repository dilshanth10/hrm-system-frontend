import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appoint-general-information',
  templateUrl: './appoint-general-information.component.html',
  styleUrls: ['./appoint-general-information.component.css']
})
export class AppointGeneralInformationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addDetail(){
    //alert("tets")
this.router.navigate(['/appointment/appointmentAdd/academicInfo']);
  }
}
