import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { UserLoanDetailsService } from '../../Service/user-loan-details.service';
//import { Observable } from 'rxjs';
import { UserLoanDetails } from '../../Model/user-loan-details';
import {Router} from '@angular/router'

@Component({
  selector: 'app-taken-view-by-hr',
  templateUrl: './taken-view-by-hr.component.html',
  styleUrls: ['./taken-view-by-hr.component.css']
})
export class TakenViewByHrComponent implements OnInit {
  userLoanDetails : UserLoanDetails[];
  displayedColumns: string[] = ['user_id','user', 'dateOfLoanObtained', 'loanDetailsEntity','installmentDate', 'installmentAmount', 'redemptionDate'];
dataSource= new MatTableDataSource<UserLoanDetails>();
  constructor(private router: Router,private  userLoanDetailsService: UserLoanDetailsService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(){
    this.userLoanDetailsService.getUserLoanDetails().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource = new MatTableDataSource<any>(this.userLoanDetails);
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