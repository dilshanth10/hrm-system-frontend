import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {ViewEmpSalaryChartService} from '../../Service/view-emp-salary-chart.service';
import {ViewEmpSalaryChart} from '../../Model/view-emp-salary-chart';

@Component({
  selector: 'app-view-salary-chart',
  templateUrl: './view-salary-chart.component.html',
  styleUrls: ['./view-salary-chart.component.css']
})
export class ViewSalaryChartComponent implements OnInit {

  viewEmpSalaryChart:ViewEmpSalaryChart[];
  dataSource = new MatTableDataSource<ViewEmpSalaryChart>();
  displayedColumns: string[] = ['id','basicSalary','empName','epf','loan','netSalary','payee','stampDuty','statutoryPayment'];
   constructor( private viewEmpSalaryChartService: ViewEmpSalaryChartService) { }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  ngOnInit() {
    this.viewEmpSalaryChartService.getSalaryChart().subscribe(data=>{
this.dataSource.data=data;
    });
    this.dataSource = new MatTableDataSource<any>(this.viewEmpSalaryChart);
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
