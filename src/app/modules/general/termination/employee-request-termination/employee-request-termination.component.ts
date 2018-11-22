import { Component, OnInit } from '@angular/core';
import { RequestTermination } from 'src/app/models/employee-termination/request-termination';
import { RequestTerminationService } from 'src/app/services/employee-termination/request-termination.service';



@Component({
  selector: 'app-employee-request-termination',
  templateUrl: './employee-request-termination.component.html',
  styleUrls: ['./employee-request-termination.component.css']
})
export class EmployeeRequestTerminationComponent implements OnInit {
  requestTerminationObj = new RequestTermination();
  requestTermination : RequestTermination[];
  msg: any;
  

  constructor(private requestTerminationService : RequestTerminationService) { }

  ngOnInit() {
    this.getRequestTermination();
  }

  getRequestTermination() {
    this.requestTerminationService.getRequestTermination().subscribe(data => {
      this.requestTermination = data;
      console.log(data);
    });
  }

  createRequestTermination() {
    this.requestTerminationObj.terminationType.id = 1;
    this.requestTerminationObj.employee.userId = 1;
    this.requestTerminationService.createRequestTermination(this.requestTerminationObj).subscribe(data => {
    });

  }
  

}
