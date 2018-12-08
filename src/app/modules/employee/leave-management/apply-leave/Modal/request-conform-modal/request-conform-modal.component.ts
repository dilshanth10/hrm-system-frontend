import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { LeaveManagementInteractionService } from './../../../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-request-conform-modal',
  templateUrl: './request-conform-modal.component.html',
  styleUrls: ['./request-conform-modal.component.css']
})
export class RequestConformModalComponent implements OnInit {

  info:any;
  username:string;
  leaveRequest: LeaveRequest;
  constructor(
    private interactionService: LeaveManagementInteractionService,
    private leaveRequestService: LeaveRequestService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.username = this.info.username;
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequest$.subscribe(data => {
      this.leaveRequest = data;
      console.log(this.leaveRequest);
    })
  }

  addLeaveRequest() {

    if(this.leaveRequest.endDate && this.leaveRequest.startDate &&
      this.leaveRequest.reason && this.leaveRequest.leaveAllocation.id && this.leaveRequest.attachment){
        this.leaveRequest.userName = this.username;
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data =>{
      console.log(data);
      this.interactionService.sendSuccessMsg("leaveRequestSent");
    })
   
    }

    
  }
}
