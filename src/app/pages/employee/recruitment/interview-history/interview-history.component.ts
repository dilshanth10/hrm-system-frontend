import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-interview-history',
  templateUrl: './interview-history.component.html',
  styleUrls: ['./interview-history.component.css']
})
export class InterviewHistoryComponent implements OnInit {
  
  interviewHistory:FormGroup;

  ngOnInit(){
    
  }
  
  constructor(){
    this.interviewHistory=new FormGroup({
      'datas':new FormArray([
        this.dataArrayFunction(),
       ])


      
    })
  }

  dataArrayFunction(){
    return new FormGroup({
      'applicantsName':new FormControl(),
      'candidateType':new FormControl(),
      'selectedStatus':new FormControl(),
      'reason':new FormControl()
    })
  }

  addData(){
    let dataArray=this.interviewHistory.get('datas') as FormArray;
    dataArray.push(this.dataArrayFunction())
  }

  removeData(id){
    //alert(id)
    let dataArray=this.interviewHistory.get('datas') as FormArray;
    dataArray.removeAt(id);
  }
 
}
