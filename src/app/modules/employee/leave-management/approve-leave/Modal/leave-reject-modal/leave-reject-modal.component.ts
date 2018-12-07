import { LeaveManagementInteractionService } from './../../../interaction-service/leave-management-interaction.service';
import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { Component, OnInit } from '@angular/core';
import { Reject } from 'src/app/models/leave-management/reject';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-leave-reject-modal',
  templateUrl: './leave-reject-modal.component.html',
  styleUrls: ['./leave-reject-modal.component.css']
})
export class LeaveRejectModalComponent implements OnInit {

  rejectObj: Reject = new Reject();
  info:any;
  role: string;
  user:string;

  constructor(private leaveRequestService: LeaveRequestService, 
    private interactionService: LeaveManagementInteractionService,
    private token: TokenStorageService
    ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.user = this.info.username;
    this.getLeaveRequestId();
  }

  rejectLeaverequest() {
    this.rejectObj.userName = this.user;
    this.leaveRequestService.rejectLeaveRequest(this.rejectObj).subscribe(data => {
      console.log(data);
    })
  }

  getLeaveRequestId() {
    this.interactionService.leaveId$.subscribe(data => {
      this.rejectObj.leaveRequestId = data;
    })
  }

  sendSuccessMsg() {
    this.interactionService.updateMsg("success");
  }
}
