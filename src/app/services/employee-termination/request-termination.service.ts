import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestTermination } from 'src/app/models/employee-termination/request-termination';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RequestTerminationService {

  constructor(private httpObj: HttpClient) { }

  public getRequestTermination(){
    return this.httpObj.get<RequestTermination[]>("http://localhost:8080/hrm_system/terminationRequest");
  }

  public createRequestTermination(requestTermination){
    return this.httpObj.post<RequestTermination>("http://localhost:8080/hrm_system/terminationRequest",requestTermination);
  }
}
