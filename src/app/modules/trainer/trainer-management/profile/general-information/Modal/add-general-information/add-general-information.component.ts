import { Component, OnInit } from '@angular/core';
import { GeneralInformation } from 'src/app/modules/trainer/Model/general-information';
import { Router } from '@angular/router';
import { GeneralInformationService } from 'src/app/modules/trainer/Service/general-information.service';

@Component({
  selector: 'app-add-general-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class AddGeneralInformationComponent implements OnInit {

  generalInfoObj: GeneralInformation = new GeneralInformation();
  generalInfor:GeneralInformation;
  constructor(private router: Router,
    private generalInfo: GeneralInformationService) { }

  ngOnInit() {
  }
  createTechnologySkillLevel() {
       this.generalInfo.createGeneralInformation(this.generalInfoObj).subscribe(data => {
        console.log(data);
      });
    }
  }
 
 
 
 
 
 
 
 
 
 
 
  
      
  
  

