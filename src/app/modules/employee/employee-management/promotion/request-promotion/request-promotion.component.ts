import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-request-promotion',
  templateUrl: './request-promotion.component.html',
  styleUrls: ['./request-promotion.component.css']
})
export class RequestPromotionComponent implements OnInit {
requestPromotion:FormGroup;
  constructor() { 
this.requestPromotion=new FormGroup({
  'usrid':new FormControl,
  'positionname':new FormControl,
  'proremark':new FormControl,
  'recomby':new FormControl,
  'createdat':new FormControl
})
  }

  ngOnInit() {
  }

}
