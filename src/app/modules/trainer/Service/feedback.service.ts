import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../Model/feedback';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackAPI = "http://localhost:8020/hrm_system/feedback";

  constructor(private http: HttpClient) { }

  public getFeedback() {
    return this.http.get<Feedback[]>(this.feedbackAPI);
  }
}
