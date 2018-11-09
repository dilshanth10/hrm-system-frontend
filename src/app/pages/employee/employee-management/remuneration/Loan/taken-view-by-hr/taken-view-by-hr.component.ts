import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-taken-view-by-hr',
  templateUrl: './taken-view-by-hr.component.html',
  styleUrls: ['./taken-view-by-hr.component.css']
})
export class TakenViewByHrComponent implements OnInit {
  displayedColumns: string[] = ['employeeNumber', 'nameOfTheEmployee', 'dateOfLoanObtained', 'installmentDate', 'installmentAmount', 'redemptionDate'];

  loantakenby = [
    { 'employeeNumber': '1','nameOfTheEmployee': 'Jhon',  'dateOfLoanObtained': '2018/01/12', "installmentDate": "2018/02/12", 'installmentAmount': '5000', "redemptionDate": "2019/01/12" },
    {  'employeeNumber': '2','nameOfTheEmployee': 'Peter', 'dateOfLoanObtained': '2018/01/12', "installmentDate": "2018/02/12", 'installmentAmount': '7500', "redemptionDate": "2019/12/12" },
    { 'employeeNumber': '3','nameOfTheEmployee': 'Paul', 'dateOfLoanObtained':'2018/04/12', "installmentDate":"2018/05/12", 'installmentAmount': '6000', "redemptionDate": "2019/11/12" },
    {  'employeeNumber': '4', 'nameOfTheEmployee': 'Watson','dateOfLoanObtained': '2018/06/10', "installmentDate": "2018/07/12", 'installmentAmount': '3000', "redemptionDate": "2019/10/12" },
    { 'employeeNumber': '5', 'nameOfTheEmployee': 'Sanga', 'dateOfLoanObtained': '2018/01/22', "installmentDate": "2018/02/22", 'installmentAmount': '8000', "redemptionDate": "2019/01/12" },
    { 'employeeNumber': '6','nameOfTheEmployee': 'Harry',  'dateOfLoanObtained': '2018/11/25', "installmentDate": "2018/12/12", 'installmentAmount': '5500', "redemptionDate": "2019/11/12" },
    {  'employeeNumber': '7','nameOfTheEmployee': 'Kumar', 'dateOfLoanObtained': '2018/03/02', "installmentDate": "2018/04/12", 'installmentAmount': '2500', "redemptionDate": "2019/03/02" }
  ]
  dataSource = new MatTableDataSource<any>(this.loantakenby);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.loantakenby);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
