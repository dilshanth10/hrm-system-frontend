import { SelfServiceType } from './../models/self-service/self-service-type';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { SelfService } from 'src/app/models/self-service/self-service';
import { Response } from '../models/self-service/response';
import { CareerDevPlan } from '../modules/general/career-dev-plan/Model/career-dev-plan';


@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
  private selfServiceTypeDataSource = new Subject<SelfServiceType>();
  private msgDataSource = new Subject<string>();
  private selfServiceDataSource = new Subject<SelfService>();
  private responseDataSource = new Subject<Response>();
  

  private comanyCDPDataSource = new Subject<CareerDevPlan>();

  loggedInSource$ = this.loggedInSource.asObservable();
  selfServiceTypeDataSource$ = this.selfServiceTypeDataSource.asObservable();
  selfServiceDataSource$ = this.selfServiceDataSource.asObservable();
  responseDataSource$ = this.responseDataSource.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();

  comanyCDPDataSource$ = this.comanyCDPDataSource.asObservable();

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }
  sendSelfServiceType(selfServiceType: SelfServiceType) {
    return this.selfServiceTypeDataSource.next(selfServiceType);
  }
  sendSelfService(selfService: SelfService) {
    return this.selfServiceDataSource.next(selfService);
  }
  sendResponseService(response: Response) {
    return this.responseDataSource.next(response);
  }
  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendCDPService(careerDevPlan : CareerDevPlan){
    return this.comanyCDPDataSource.next(careerDevPlan);
  }
}
