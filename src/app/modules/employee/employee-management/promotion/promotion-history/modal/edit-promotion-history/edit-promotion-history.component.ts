import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-promotion-history',
  templateUrl: './edit-promotion-history.component.html',
  styleUrls: ['./edit-promotion-history.component.css']
})
export class EditPromotionHistoryComponent implements OnInit {
  editpromotionhistory: FormGroup;
  constructor() {
  this.editpromotionhistory = new FormGroup({
    'empId': new FormControl,
    'empname': new FormControl,
    'positionname': new FormControl,
    'promoteddate': new FormControl,
    'salary': new FormControl,
    'promotionremark': new FormControl
  })
  }

  ngOnInit() {
  }

}
