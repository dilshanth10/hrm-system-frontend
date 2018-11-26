import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Referee } from './referee.model';
const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RefereesService {

  constructor(private httpObj:HttpClient) { }
  private refereeurl = "http://localhost:8080/hrm_system/referee";

  getReferee(){
    return this.httpObj.get<Referee[]>(this.refereeurl);
  }
  addReferee(data){
    return this.httpObj.post<Referee>(this.refereeurl,data);
  }

}
