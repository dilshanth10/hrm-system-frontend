import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { EmpProfile } from './emp-profile';
@Component({
  selector: 'app-emp-profile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {
  
  employees: EmpProfile[] = [
    {
      empName: 'John',
      empId: 1,
      gender: 'male',
      email: 'john11@gmail',
      contactNo: '0777725654',
      address: 'jaffna',
      appointDate: new Date('10/02/2018'),
      role: 'accountant',
      photoPath: '../../../../../../assets/images/john.jfif',
      nationality: 'Srilankan Tamil',
      nic: '921961464v',
      religion: 'Hindu',
      dateOfBirth: new Date('12/02/2018'),
      addressR: 'jaffna',
      contactNoR: '0212222456',
      maritalStatus: 'Single',
      basicSalary: '40000',
      blg:'O+'
    },
    {
      empName: 'Rosh',
      empId: 2,
      gender: 'female',
      email: 'rosh@gmail',
      contactNo: '0772563547',
      address: 'chavakachcheri',
      appointDate: new Date('10/02/2018'),
      role: 'hr manager',
      photoPath: 'assets/images/rosh',
      nationality: 'Srilankan Tamil',
      nic: '921961464v',
      religion: 'Hindu',
      dateOfBirth: new Date('12/02/2018'),
      addressR: 'jaffna',
      contactNoR: '0212222456',
      maritalStatus: 'Single',
      basicSalary: '40000',
      blg:'O-'
    }
  ]

 

  constructor(private router:Router) { }

  ngOnInit() {
   
  }

  applyFilter(filterValue: string) {
    
  }
  
  GenralInfo(id){
    this.router.navigate(['/profile/genInf']);
  }
}
