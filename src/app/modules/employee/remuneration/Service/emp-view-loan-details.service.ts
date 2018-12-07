import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoanDetails } from '../Model/user-loan-details';
import { LoginCredential } from '../Model/login-credential';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class EmpViewLoanDetailsService {
  
  private loanDetailsByEmpUrl = 'http://localhost:8080/hrm_system/userloandetails';
  private loginUserUrl='http://localhost:8010/api/auth';
  constructor(private http:HttpClient) { }

  public getUserIdByName(id){
    return this.http.get<Login[]>(this.loginUserUrl+"/"+id);
    }
  
  public getSpecifigEmp(id): Observable<UserLoanDetails[]>{
    return this.http.get<UserLoanDetails[]>(this.loanDetailsByEmpUrl+"/"+id)
  }
}
