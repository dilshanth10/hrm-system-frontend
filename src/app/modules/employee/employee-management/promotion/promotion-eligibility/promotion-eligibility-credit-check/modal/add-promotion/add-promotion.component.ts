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
    // 'proId': new FormControl,
    'reqId': new FormControl,
    'resigId':new FormControl,
    'positionname': new FormControl,
    'promoteddate': new FormControl,
    'salary': new FormControl,
    'promotionremark': new FormControl,
    'proBy':new FormControl
    
  })
  }

  ngOnInit() {
  }

}
