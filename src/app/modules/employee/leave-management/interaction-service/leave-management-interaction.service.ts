import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/leave-management/user';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementInteractionService {

  constructor() { }

  private user = new BehaviorSubject<User>(null);
  private leaveId = new BehaviorSubject<number>(null)
  private msg = new BehaviorSubject<string>(null)

  user$ = this.user.asObservable();
  leaveId$ = this.leaveId.asObservable();
  msg$ = this.msg.asObservable();

  sendUserId(user: User) {
    this.user.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveId.next(leaveId);
  }

  updateMsg(msg: string) {
    this.msg.next(msg);
  }
}
