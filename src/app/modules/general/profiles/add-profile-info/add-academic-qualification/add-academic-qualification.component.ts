import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous() {
    this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
  }
}
