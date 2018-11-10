import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-infomation',
  templateUrl: './general-infomation.component.html',
  styleUrls: ['./general-infomation.component.css']
})
export class GeneralInfomationComponent implements OnInit {

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
