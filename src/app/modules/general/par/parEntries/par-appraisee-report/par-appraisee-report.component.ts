import { Component, OnInit } from '@angular/core';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';
import { FormArray, FormGroup, NgForm } from '@angular/forms';
import { Par } from '../../models/par.model';
import { ScheduleParGet } from '../../models/schedule-par-get.model';
import { ScheduleParService } from '../../services/schedule-par.service';
import { ReportParAppraiseePost } from '../../models/report-par-appraisee-post';
import { ScoreParAppraiseePost } from '../../models/score-par-appraisee-post';

@Component({
  selector: 'app-par-appraisee-report',
  templateUrl: './par-appraisee-report.component.html',
  styleUrls: ['./par-appraisee-report.component.css']
})
export class ParAppraiseeReportComponent implements OnInit {

  parArray: Par[];
  parDataArray: ScheduleParGet = new ScheduleParGet();
  reportParAppraiseePost: ReportParAppraiseePost = new ReportParAppraiseePost();
  reportParId: number;

  constructor(private scheduleParService: ScheduleParService) { }

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

  formData(scoreForm: NgForm) {
    //console.log(scoreForm.value);

    this.reportParAppraiseePost.scoreParAppraiseeList = [];
    this.reportParAppraiseePost.parId = this.reportParId;
    this.reportParAppraiseePost.reportId = scoreForm.value.reportId;
    for (let val of Object.keys(scoreForm.value)) {
      //console.log(Object.keys(scoreForm.value))
      // console.log(val)
      // console.log(scoreForm.value[val]);
      // console.log(Object.values(scoreForm.value))
      if (val !== "reportId") {
        this.reportParAppraiseePost.scoreParAppraiseeList.push(new ScoreParAppraiseePost(val, scoreForm.value[val]));
      }

    }

  }

}
