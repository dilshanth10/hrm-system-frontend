import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from './profile.model';


@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})




export class ProfileTableComponent implements OnInit {
  
  employees: Profile[] = [
    {
      empName: 'john',
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
      empName: 'rosh',
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

  displayedColumns: string[] = ['empName','empId', 'gender', 'email','contactNo','address', 'appointDate','role','manage'];

  profile = [
    {'empName':'john','empId':'1', 'gender':'male', 'email':'john11@gmail','contactNo':'0777725654','address':'jaffna', 'appointDate':'10/02/2018','role':'accountant','manage':''},
    {'empName':'rosh','empId':'2', 'gender':'female', 'email':'rosh@gmail','contactNo':'0772563547','address':'chavakachcheri', 'appointDate':'10/02/2018','role':'hr manager','manage':''}
   
   
  ]
  dataSource = new MatTableDataSource<any>(this.profile);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.profile);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onClick(empId:number){
    // this.router.navigate(['profile/profileInfo/emp',empId])
    //alert(empId)
    this.router.navigate([empId],{relativeTo:this.route})
  }

}
