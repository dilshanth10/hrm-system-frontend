import {  Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/leave-management/user';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementInteractionService {

  constructor() { }

  private user = new Subject<User>();
  private leaveId = new Subject<number>()
  private msg = new Subject<string>()
  private leaveRequest = new Subject<LeaveRequest>();

  user$ = this.user.asObservable();
  leaveId$ = this.leaveId.asObservable();
  msg$ = this.msg.asObservable();
  leaveRequest$ = this.leaveRequest.asObservable();

  sendUserId(user: User) {
    this.user.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveId.next(leaveId);
  }

  updateMsg(msg: string) {
    this.msg.next(msg);
  }

  setLeaveRequest(leaveRequest:LeaveRequest){
    this.leaveRequest.next(leaveRequest);
  }
}
