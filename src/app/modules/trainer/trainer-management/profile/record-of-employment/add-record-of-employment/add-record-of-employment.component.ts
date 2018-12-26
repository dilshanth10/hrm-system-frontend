import { Component, OnInit } from '@angular/core';
import { RecordOfEmployment } from 'src/app/modules/trainer/Model/record-of-employment';
import { RecordOfEmploymentService } from 'src/app/modules/trainer/Service/record-of-employment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-record-of-employment',
  templateUrl: './add-record-of-employment.component.html',
  styleUrls: ['./add-record-of-employment.component.css']
})
export class AddRecordOfEmploymentComponent implements OnInit {

  recordOfEmployObj: RecordOfEmployment = new RecordOfEmployment();
  constructor(private router: Router,
    private recordemploy: RecordOfEmploymentService) { }

  ngOnInit() {
  }
  createRecordOfEmployment() {
    this.recordemploy.createRecordOfEmployment(this.recordOfEmployObj).subscribe(data => {
      console.log(data);
    });
  }
}
