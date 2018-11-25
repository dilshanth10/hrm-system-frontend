import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private leaveRequestService: LeaveRequestService) { }

  leaveRequest = new LeaveRequest();

  ngOnInit() {
    
  }

  createLeaveRequest() {
    this.leaveRequest.leaveType.id = 1;
    this.leaveRequest.userName="soo";
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
    this.clearAfterAdd();
    console.log(data);
    })
  }

  clearAfterAdd() {
    this.leaveRequest.reason = null;
    this.leaveRequest.leaveType.id = null;
    this.leaveRequest.startDate = null;
    this.leaveRequest.endDate = null;
    this.leaveRequest.attachment = null;
    this.leaveRequest.userName = null;
  }

}
