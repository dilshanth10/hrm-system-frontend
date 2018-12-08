import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancel } from 'src/app/models/leave-management/cancel';

@Injectable({
  providedIn: 'root'
})
export class CancelRequestService {

  constructor(private http:HttpClient) { }

  baseUrl = 'http://localhost:8090/hrm_system/cancel';

  public cancelRequest(leave){
    return this.http.post<Cancel>(this.baseUrl,leave);

  }
  public getAllCancelLeaveRequest(){
    return this.http.get<Cancel[]>(this.baseUrl)
  }
}
