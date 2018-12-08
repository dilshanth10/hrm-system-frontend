import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveManagementInteractionService } from '../interaction-service/leave-management-interaction.service';

@Component({
  selector: 'app-view-my-leave',
  templateUrl: './view-my-leave.component.html',
  styleUrls: ['./view-my-leave.component.css']
})
export class ViewMyLeaveComponent implements OnInit {
 
  displayedColumns: string[] = ['startDate','endDate','numberOfDays','leaveType','reason','status','cancel'];
  leaveRequestByUsername: LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.leaveRequestByUsername);

  info:any; 
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private token: TokenStorageService,
    private leaveRequestService: LeaveRequestService,
    private interactionService: LeaveManagementInteractionService
    ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveRequestByUser();
    this.getSuccessMessage();
  }

  getLeaveRequestByUser() {
    this.leaveRequestService.getAllLeaveRequestByUserName(this.info.username).subscribe(data => {
      this.leaveRequestByUsername = data;
      this.dataSource = new MatTableDataSource<any>(this.leaveRequestByUsername);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.leaveRequestByUsername);
    })
  }

  sendLeaveId(leaveId){
    this.interactionService.setLeaveId(leaveId);
  }

  getSuccessMessage(){
    this.interactionService.msg$.subscribe(data => {
      if(data == "leaveRequestSent"){
        this.getLeaveRequestByUser();
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
