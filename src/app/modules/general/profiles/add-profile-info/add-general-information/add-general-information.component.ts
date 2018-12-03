import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-general-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  proObj:Profile=new Profile();
  constructor(private router: Router, 
    private profileser:ProfileInfoService) { }

  ngOnInit() {
   
  }
  
  addUserForm = new FormGroup({
    userName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ])),
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    employeeName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    nationality: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    roleId: new FormControl(''),
    departmentId: new FormControl(''),
    date: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
  });



  addProfileGeneralInfo(){
    return this.profileser.addGeneralInfo(this.proObj).subscribe(data=>{
      console.log(data);
      alert("added")
      this.next();
    })
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
  }

}
