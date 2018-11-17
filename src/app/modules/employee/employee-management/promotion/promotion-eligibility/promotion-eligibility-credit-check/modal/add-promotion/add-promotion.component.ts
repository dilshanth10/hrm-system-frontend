import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

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
