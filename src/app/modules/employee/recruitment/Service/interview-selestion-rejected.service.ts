import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewSelectionRejected } from '../Modal/interview-selection-rejected';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InterviewSelestionRejectedService {

  constructor(private httpObj: HttpClient) { }

  interviewRejectedUrl: "http://localhost:8080/hrm_system/rejectedApplicant";

  postSelectedApplicants(applicantRejectedData) {
    return this.httpObj.post<InterviewSelectionRejected>(this.interviewRejectedUrl, applicantRejectedData);

  }
}
