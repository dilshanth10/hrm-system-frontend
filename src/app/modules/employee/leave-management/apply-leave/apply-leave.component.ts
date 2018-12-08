import { LeaveAllocation } from './../../../../models/leave-management/leave-allocation';
import { LeaveAllocationService } from './../../../../services/leave-management/leave-allocation.service';
import { LeaveManagementInteractionService } from './../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private leaveRequestService: LeaveRequestService,
    private leaveAllocationService: LeaveAllocationService,
    private interactionService: LeaveManagementInteractionService,
    private token: TokenStorageService
  ) { }

  today = new Date();
  leaveRequest = new LeaveRequest();
  leaveAllocation: LeaveAllocation[];
  info: any;
  role: string;
  user: string;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.user = this.info.username;
    this.leaveRequest.noOfDays = 0;
    this.getLeaveAllocation();
  }

  createLeaveRequest() {
    this.leaveRequest.userName = this.user;
    console.log(this.leaveRequest);
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
      console.log(data);
    })
    this.clearField();
  }

  clearField() {
    this.leaveRequest.reason = null;
    this.leaveRequest.leaveAllocation.id = null;
    this.leaveRequest.startDate = null;
    this.leaveRequest.endDate = null;
    this.leaveRequest.attachment = null;
    this.leaveRequest.userName = null;
    this.leaveRequest.noOfDays = 0;
  }

  getLeaveAllocation() {
    this.leaveAllocationService.getAllLeaveAllocationByUser(this.user).subscribe(data => {
      this.leaveAllocation = data;
      console.log(this.leaveAllocation);
    })
  }

  noOfDays() {
    if (this.leaveRequest.endDate != null && this.leaveRequest.startDate != null) {
      var time = new Date(this.leaveRequest.endDate).getTime() - new Date(this.leaveRequest.startDate).getTime();
      this.leaveRequest.noOfDays = time / (1000 * 60 * 60 * 24) + 1;
    }
  }

  sendSuccessMsg() {
    this.interactionService.updateMsg("leaveRequestSuccess");
  }
}
