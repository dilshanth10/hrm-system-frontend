import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoNext(){
    this.router.navigate(['/profile/academicQual']);
  }
  goBack(){
    this.router.navigate(['/profile/empprofile']);
  }

}
