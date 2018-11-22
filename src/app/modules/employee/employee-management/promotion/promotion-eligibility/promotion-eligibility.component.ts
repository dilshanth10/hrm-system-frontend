import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-eligibility',
  templateUrl: './promotion-eligibility.component.html',
  styleUrls: ['./promotion-eligibility.component.css']
})
export class PromotionEligibilityComponent implements OnInit {
  displayedColumns: string[] = ['proReqId', 'emplID','desiglID','recBy','remark','promoteddate','check'];

  PromotionEligibility = [
    { 'proReqId':'001', 'emplID':'01' ,'desiglID':'01','recBy':'r1','remark':'AE','promoteddate':'10-08-2018','check':'' },
    { 'proReqId':'002', 'emplID':'02' ,'desiglID':'02','recBy':'r2','remark':'SE','promoteddate':'10-09-2018','check':'' },
    { 'proReqId':'003', 'emplID':'03' ,'desiglID':'02','recBy':'r3','remark':'ASE','promoteddate':'10-10-2018','check':'' },
    { 'proReqId':'004', 'emplID':'04' ,'desiglID':'02','recBy':'r4','remark':'AE','promoteddate':'10-11-2018','check':'' },
    { 'proReqId':'005', 'emplID':'05' ,'desiglID':'02','recBy':'r5','remark':'ASE','promoteddate':'10-12-2018','check':'' }
    
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
