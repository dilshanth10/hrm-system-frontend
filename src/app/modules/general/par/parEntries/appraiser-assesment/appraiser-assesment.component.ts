import { Component, OnInit } from '@angular/core';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { Par } from '../../models/par.model';
import { ReportParAppraiserPost } from '../../models/report-par-appraiser-post';
import { ScheduleParService } from '../../services/schedule-par.service';
import { AppraiserAssesmentService } from '../../services/appraiser-assesment.service';

@Component({
  selector: 'app-appraiser-assesment',
  templateUrl: './appraiser-assesment.component.html',
  styleUrls: ['./appraiser-assesment.component.css']
})
export class AppraiserAssesmentComponent implements OnInit {

  parArray: Par[];
  parDataArray: ScheduleParGet = new ScheduleParGet();
  reportParAppraiserPost: ReportParAppraiserPost = new  ReportParAppraiserPost();
  reportParId: number;

  constructor(private scheduleParService: ScheduleParService, private appraiserAssesmentService: AppraiserAssesmentService ) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
    },
      err => (console.log(err))
    )
    
  }

  viewSchedulePar(parId) {
    //alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data => {
      this.parDataArray = data;
      console.log(data)
      this.reportParId = parId;
    },
      err => (console.log(err)))
  }

  // formData(scoreForm: NgForm) {
  //   //console.log(scoreForm.value);
  //   var status: boolean = false;
  //   if (status == false) {


  //     this.reportParAppraiseePost.scoreParAppraiseeList = [];
  //     this.reportParAppraiseePost.parId = this.reportParId;
  //     this.reportParAppraiseePost.reportId = scoreForm.value.reportId;
  //     for (let val of Object.keys(scoreForm.value)) {

  //       if (val !== "reportId") {
  //         this.reportParAppraiseePost.scoreParAppraiseeList.push(new ScoreParAppraiseePost(val, scoreForm.value[val]));
  //       }

  //     }
  //     status = true;
  //   }

  //   if (status == true) {
  //     this.selfAssessmentService.apprasiseeApplyScore(this.reportParAppraiseePost).subscribe(data => {
  //       alert("sucessfully apply score");
  //     });
  //   }
  // }

}
