import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {
  
  displayedColumns: string[] = ['employeeId', 'employeename','dateofappoinment','basicsalary','increment','deductions','allowances','statutorypayment','netsalary'];



  constructor() { }

  ngOnInit() {

  }
}