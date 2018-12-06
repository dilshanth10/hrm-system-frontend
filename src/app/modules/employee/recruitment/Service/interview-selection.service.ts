import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { InterviewSelection } from '../Modal/interview-selection';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InterviewSelectionService {

  constructor(private httpObj:HttpClient) { }

  interviewSelectionUrl:"http://localhost:8080/hrm_system/interviewSchedule";

  postSelectedApplicants(applicantSelectData){
    return this.httpObj.post<InterviewSelection>(this.interviewSelectionUrl,applicantSelectData);
    
  }
}
