import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-insert-promotion',
  templateUrl: './insert-promotion.component.html',
  styleUrls: ['./insert-promotion.component.css']
})
export class InsertPromotionComponent implements OnInit {

  insertpromation: FormGroup;
  constructor() {
  this.insertpromation = new FormGroup({
    'empId': new FormControl,
    'empname': new FormControl,
    'positionname': new FormControl,
    'promoteddate': new FormControl,
    'promotionremark': new FormControl,
    'salary': new FormControl
  })
  }

  ngOnInit() {
  }

}
