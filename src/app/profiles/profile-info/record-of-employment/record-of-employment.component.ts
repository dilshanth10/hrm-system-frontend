import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-of-employment',
  templateUrl: './record-of-employment.component.html',
  styleUrls: ['./record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous() {
    this.router.navigate(['/profile/professionalQualification']);
  }

  next() {
    this.router.navigate(['/profile/referees']);
  }

}
