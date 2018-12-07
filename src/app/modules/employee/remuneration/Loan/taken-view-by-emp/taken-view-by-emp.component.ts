import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EmpViewLoanDetailsService } from '../../Service/emp-view-loan-details.service';
import { UserLoanDetails } from '../../Model/user-loan-details';
import { TokenStorageService } from '../../../../../services/login/token-storage.service';
import { LoginCredential } from '../../Model/login-credential';
import { Login } from '../../Model/login';

@Component({
  selector: 'app-taken-view-by-emp',
  templateUrl: './taken-view-by-emp.component.html',
  styleUrls: ['./taken-view-by-emp.component.css']
})
export class TakenViewByEmpComponent implements OnInit {
userLoanDetails :UserLoanDetails[];
userLoanDetail :UserLoanDetails;
info:any;
login=new Login();
  displayedColumns: string[] = ['dateOfLoanObtained', 'amountOfLoanObtained', 'installmentDate', 'installmentAmount', 'redemptionDate'];

  dataSource = new MatTableDataSource<UserLoanDetails>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empViewLoanDetailsService: EmpViewLoanDetailsService,private token:TokenStorageService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.userLoanDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()

    };

    this.empViewLoanDetailsService.getUserIdByName(this.info.username).subscribe(data=>{
      this.login = data;
      console.log(data)
      console.log(this.login.user.id);
      //this.getAllSalaryChartData(this.loginCredentialObj.user.id);
    });
      this.empViewLoanDetailsService.getSpecifigEmp(this.login.user.id).subscribe(data=>{
      this.userLoanDetails = data;
      this.dataSource.data=data;
      console.log(data)
      });
  }

      //console.log(this.userLoandetail);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
