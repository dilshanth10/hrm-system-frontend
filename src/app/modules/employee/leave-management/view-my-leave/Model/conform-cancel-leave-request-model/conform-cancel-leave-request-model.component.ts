import { Component, OnInit } from '@angular/core';
import { LeaveManagementInteractionService } from '../../../interaction-service/leave-management-interaction.service';
import { Cancel } from 'src/app/models/leave-management/cancel';
import { CancelRequestService } from 'src/app/services/leave-management/cancel-request.service';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';

@Component({
  selector: 'app-conform-cancel-leave-request-model',
  templateUrl: './conform-cancel-leave-request-model.component.html',
  styleUrls: ['./conform-cancel-leave-request-model.component.css']
})
export class ConformCancelLeaveRequestModelComponent implements OnInit {

  cancelObj = new Cancel();

  constructor(private interactionService: LeaveManagementInteractionService,
    private cancelRequestService: CancelRequestService,
    private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequest$.subscribe(data => {
      this.cancelObj.leaveRequest = data;
    })
  }

  cancelLeaveRequest() {
    if (this.cancelObj.leaveRequest.status == 'ACCEPTED') {
      this.cancelRequestService.cancelRequest(this.cancelObj).subscribe(data => {
        console.log(data);
        this.sendSuccessMsg();
      });

    }
    if (this.cancelObj.leaveRequest.status == 'PENDING') {
      this.deleteLeaveRequest();
    }
  }

  deleteLeaveRequest() {
    this.leaveRequestService.deleteLeaveRequest(this.cancelObj.leaveRequest.id).subscribe(data => {
      console.log(data);
      this.sendSuccessMsg();
    })

  }

  sendSuccessMsg() {
    this.interactionService.sendSuccessMsg("cancelSuccess");
  }
}