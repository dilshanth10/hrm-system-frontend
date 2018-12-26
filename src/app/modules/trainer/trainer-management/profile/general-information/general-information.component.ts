import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GeneralInformation } from '../../../Model/general-information';
import { GeneralInformationService } from '../../../Service/general-information.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {

  generalInformation:GeneralInformation[];
  dataSource = new MatTableDataSource<any>(this.generalInformation);
  displayedColumns: string[] = ['id','fullname','email','nationality','nic','religion','gender','dob','paddress','raddress','mnumber','tnumber','mstatus','position','sarea','edit/delete'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private generalInformationService:GeneralInformationService) { }

  ngOnInit() {
    this.getAllGeneralInfor();
    this.dataSource = new MatTableDataSource<any>(this.generalInformation);
   // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllGeneralInfor(){
    this.generalInformationService.getGenerelInformation().subscribe(data=>{
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=data;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    })
  }

}






  // generalInfoObj: GeneralInformation = new GeneralInformation();
  // constructor(private router: Router,
  //   private generalInfo: GeneralInformationService) { }

  // ngOnInit() {
  // }
  // createGeneralInformation() {
  //      this.generalInfo.createGeneralInformation(this.generalInfoObj).subscribe(data => {
  //       console.log(data);
        
    //     // alert("added")
    //     this.next();
    //     this.responseMsg = "success";
    //     this.responseMsgTimeOut();
  
  
    //  });
    //   this.responseMsg = "fail";
    //   this.responseMsgTimeOut();
    // }
  
    // next() {
    //   this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
    
  
  // }
  // }
