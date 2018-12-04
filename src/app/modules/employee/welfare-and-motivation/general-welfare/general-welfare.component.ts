import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { GeneralWelfareService } from '../Service/general-welfare.service';
import { GeneralWelfare } from '../Model/general-welfare';

@Component({
  selector: 'app-general-welfare',
  templateUrl: './general-welfare.component.html',
  styleUrls: ['./general-welfare.component.css']
})
export class GeneralWelfareComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','allocationdetails','edit/delete'];

  generalwelfare = [
    { 'id':'1', 'name':'Common seminar', 'allocationdetails':'for all employees', 'edit/delete':'' },
    
  ]
  dataSource = new MatTableDataSource<any>(this.generalwelfare);

  generalWelfareObj = new GeneralWelfare();
  general: GeneralWelfare[];
  msg: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private generalWelfareService:GeneralWelfareService) {  }

  ngOnInit() {

    this.dataSource = new MatTableDataSource<any>(this.generalwelfare);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    
  this.getIndividualWelfare();
  }
  getIndividualWelfare() {
    this.generalWelfareService.getAllGeneralWelfare().subscribe(data => {
      this.general = data;
    });

  }
  createStatus() {
    this.generalWelfareService.createGeneralWelfare(this.generalWelfareObj).subscribe(data => {
      this.getIndividualWelfare();
    });

  }

  updateStatus() {
    this.generalWelfareService.updateGeneralWelfare(this.generalWelfareObj).subscribe(data => {


      this.getIndividualWelfare();
    })

  }
  deleteStatus() {
    this.generalWelfareService.deleteGeneralWelfare(this.generalWelfareObj).subscribe(data => {

      this.getIndividualWelfare();
    });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

