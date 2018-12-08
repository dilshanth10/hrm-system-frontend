import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEmpSalaryChart } from '../../Model/view-emp-salary-chart';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewEmpSalaryChartService } from '../../Service/view-emp-salary-chart.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LoginCredential } from '../../Model/login-credential';

@Component({
  selector: 'app-salary-chart-employee',
  templateUrl: './salary-chart-employee.component.html',
  styleUrls: ['./salary-chart-employee.component.css']
})
export class SalaryChartEmployeeComponent implements OnInit {
  
  viewSalaryChart: ViewEmpSalaryChart;
  info: any;
  loginCredentialObj = new LoginCredential();
  constructor(private viewEmpSalaryChartService: ViewEmpSalaryChartService, private token: TokenStorageService) { }

  ngOnInit():void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

<<<<<<< HEAD
    this.viewEmpSalaryChartService.getUserIdByName(this.info.username).subscribe(data=>{
      this.loginCredentialObj = data;
      //this.getAllSalaryChartData(this.loginCredentialObj.user.id);
    })
  }
=======
  //   this.viewEmpSalaryChartService.getUserIdByName(this.info.username).subscribe(data=>{
  //     this.loginCredentialObj = data;
  //     this.getAllSalaryChartData(this.loginCredentialObj.user);
  //   })
  // }
>>>>>>> 69df538ec2b0990c90a4aa4f5d4359c129db6c3c

  // getAllSalaryChartData(userId){
  //   this.viewEmpSalaryChartService.getSalaryChartByName(userId).subscribe(data=>{
  //     this.viewSalaryChart = data;
  //     console.log(this.viewSalaryChart);
  //   })
  // }
  
}
}