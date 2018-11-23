import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { Profile } from './profile.model';
import { ProfileInfoService } from './profile-info.service';


@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})




export class ProfileTableComponent implements OnInit {
  
  employees: Profile[] 

  displayedColumns: string[] = ['empName','empId', 'gender', 'email','contactNo','address', 'appointDate','role','manage'];

  profile = [
    {'empName':'john','empId':'1', 'gender':'male', 'email':'john11@gmail','contactNo':'0777725654','address':'jaffna', 'appointDate':'10/02/2018','role':'accountant','manage':''},
    {'empName':'rosh','empId':'2', 'gender':'female', 'email':'rosh@gmail','contactNo':'0772563547','address':'chavakachcheri', 'appointDate':'10/02/2018','role':'hr manager','manage':''}
   
   
  ]
  dataSource = new MatTableDataSource<any>(this.profile);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router:Router,private generalInfoService:ProfileInfoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.profile);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  // onClick(empId:number){
  //   this.router.navigate(['/'])
  // }
  getAllUser(){
     this.generalInfoService.getGenerelInfo().subscribe(data=>{
       console.log(data);
      this.employees=data;
    })
  }

  GenralInfo(id){
    this.router.navigate(['emp']);
  }
  
}
