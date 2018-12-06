import { Component, OnInit } from '@angular/core';
import { Par } from '../../models/par.model';
import { ScheduleParService } from '../../services/schedule-par.service';

@Component({
  selector: 'app-par-self-assesment',
  templateUrl: './par-self-assesment.component.html',
  styleUrls: ['./par-self-assesment.component.css']
})
export class ParSelfAssesmentComponent implements OnInit {

 
  parDataArray:Par=new Par();
  
  constructor(private scheduleParService: ScheduleParService) { }

  ngOnInit() {
  
  }

  viewSchedulePar(parId) {
   this.scheduleParService.getScheduleParData(parId).subscribe(data=>{
      this.parDataArray=data;
    },
    err=>(console.log(err)))
  }

}
