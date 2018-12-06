import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AddPromotion } from '../models/add-promotion';
import { Designation } from '../models/designation';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddPromotionService {

  constructor(private httpObj: HttpClient) { }
  baseUrl = "http://localhost:8080/hrm_system/addpromotion";
  private desigUrl='http://localhost:8080/hrm_system/designation';
  private proUrl='http://localhost:8080/hrm_system/promotionsave';

  public getAddPromotion() {
    return this.httpObj.get<AddPromotion[]>("http://localhost:8080/hrm_system/getpromotion");

  }
  public createAddPromotion(addPromotion) {
    return this.httpObj.post<AddPromotion>(this.proUrl, addPromotion);
  }

  public editPromotion(editPromotion) {
    return this.httpObj.put<AddPromotion>("http://localhost:8080/hrm_system/editpromotion" + "/" + editPromotion.id, editPromotion);

  }
 
  public getAllDesignation() {
    return this.httpObj.get<Designation[]>(this.desigUrl);
  }
  deletePromotion(delpro){
    return this.httpObj.delete<AddPromotion>("http://localhost:8080/hrm_system/deletepromotion"+"/"+delpro.id,delpro)
  }
}
