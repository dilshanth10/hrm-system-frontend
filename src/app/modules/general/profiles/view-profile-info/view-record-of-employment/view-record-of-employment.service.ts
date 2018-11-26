import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ViewRecordOfEmployment } from './view-record-of-employment.model';


const httpOption={
  headers:new HttpHeaders({'content-Type':'application/jsonm'})
};

@Injectable({
  providedIn: 'root'
})
export class ViewRecordOfEmploymentService {

  constructor(private http:HttpClient) { }
  private recordOfempUrl="http://localhost:8080/hrm_system/userworkexperience";
  getAllRecordOfEmp(){
    return this.http.get<ViewRecordOfEmployment[]>(this.recordOfempUrl);
  }
}
