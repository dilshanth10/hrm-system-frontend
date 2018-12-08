import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportParAppraiserGet } from '../models/report-par-appraiser-get.model';

@Injectable({
  providedIn: 'root'
})
export class AppraiserAssesmentService {

  constructor(private http: HttpClient){}

  private reportParApprasiseeUrl = 'http://localhost:8080/hrm_system/parReportAppraiser';

  // public apprasiserPutScore(parscore) {
  //   return this.http.post<ReportParAppraiseePost>(this.reportParApprasiseeUrl,parscore);
  // }

  public getParAppraiserReportsByParId(parId) {
    return this.http.get<ReportParAppraiserGet[]>(this.reportParApprasiseeUrl+"/"+parId);
  }
}
