import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-eligibility',
  templateUrl: './promotion-eligibility.component.html',
  styleUrls: ['./promotion-eligibility.component.css']
})
export class PromotionEligibilityComponent implements OnInit {
  displayedColumns: string[] = ['emplID', 'EmplName','jointdate','currposition','currsalary','promoteddate','check'];

  PromotionEligibility = [
    { 'emplID':'001', 'EmplName':'emp1' ,'jointdate':'10-08-2008','currposition':'AE','currsalary':'50000','promoteddate':'10-08-2018','check':'' },
    { 'emplID':'002', 'EmplName':'emp2' ,'jointdate':'10-08-2008','currposition':'SE','currsalary':'50000','promoteddate':'10-09-2018','check':'' },
    { 'emplID':'003', 'EmplName':'emp3' ,'jointdate':'10-08-2008','currposition':'ASE','currsalary':'50000','promoteddate':'10-10-2018','check':'' },
    { 'emplID':'004', 'EmplName':'emp4' ,'jointdate':'10-08-2008','currposition':'AE','currsalary':'50000','promoteddate':'10-11-2018','check':'' },
    { 'emplID':'005', 'EmplName':'emp5' ,'jointdate':'10-08-2008','currposition':'ASE','currsalary':'50000','promoteddate':'10-12-2018','check':'' }
    
  ]
  dataSource = new MatTableDataSource<any>(this.PromotionEligibility);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.PromotionEligibility);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
