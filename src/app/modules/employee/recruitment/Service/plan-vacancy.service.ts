import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PlanVacancy } from '../Modal/plan-vacancy';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlanVacancyService {

  constructor(private httpObj:HttpClient) { }
  vacancyUrl="http://localhost:8080/hrm_system/vacancy";

  getAllPlanVacancy(){
    return this.httpObj.get<PlanVacancy[]>(this.vacancyUrl);
  }
  
  createPlanVacancy(vacancydata){
    return this.httpObj.post<PlanVacancy>(this.vacancyUrl,vacancydata);
  }

  deletePlanVacancy(vacancydata){
    return this.httpObj.delete<PlanVacancy>(this.vacancyUrl+"/"+vacancydata.id,vacancydata)
  }
  
  updatePlanVacancy(vacancydata){
    return this.httpObj.put<PlanVacancy>(this.vacancyUrl+"/"+vacancydata.id,vacancydata)
  }
}
