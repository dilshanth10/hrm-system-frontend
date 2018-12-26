import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingHistory } from 'src/app/models/training-history';

@Injectable({
  providedIn: 'root'
})
export class TrainingHistoryService {
  constructor( private httpObj:HttpClient) { }
  private trainingHistoryUrl='http://localhost:8020/hrm_system/trainingHistory';

  getAllTrainingHistory(){
    return this.httpObj.get<TrainingHistory[]>(this.trainingHistoryUrl);
  }

  createTrainingHistory(data){
    return this.httpObj.post<TrainingHistory>(this.trainingHistoryUrl,data);
  }

  deleteTrainingHistory(traininghistory){
    return this.httpObj.delete<TrainingHistory>(this.trainingHistoryUrl+"/"+traininghistory.id,traininghistory);
  }

  updateTrainingHistory(traininghistory){
    return this.httpObj.put<TrainingHistory>(this.trainingHistoryUrl+"/"+traininghistory.id,traininghistory);
  }


}
