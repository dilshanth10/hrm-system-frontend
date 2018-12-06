import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportParAppraiseePost } from '../models/report-par-appraisee-post';

@Injectable({
  providedIn: 'root'
})
export class SelAssessmentService {

  constructor(private http: HttpClient){}

  private reportParApprasiseeUrl = 'http://localhost:8080/hrm_system/parreportappraisee';

  public apprasiseeApplyScore(parscore) {
    return this.http.post<ReportParAppraiseePost>(this.reportParApprasiseeUrl,parscore);
  }

  // public getSchedulePar() {
  //   return this.http.get<Par[]>(this.sheduleparUrl);
  // }

  // public getScheduleParData(parId) {
  //   return this.http.get<ScheduleParGet>(this.sheduleparUrl+"/par/"+parId);
  // }
}
