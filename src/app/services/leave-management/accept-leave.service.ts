import { AcceptLeave } from './../../models/leave-management/accept-leave';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AcceptLeaveService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8090/hrm_system/accept";

  public getAllAcceptData() {
    return this.http.get<AcceptLeave[]>(this.baseUrl)
  }
}
