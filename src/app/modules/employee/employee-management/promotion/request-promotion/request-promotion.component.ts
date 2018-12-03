import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { RequestPromotion } from '../models/request-promotion';
import { RequestPromotionService } from '../services/request-promotion.service';
import { Department } from '../models/department';


@Component({
  selector: 'app-request-promotion',
  templateUrl: './request-promotion.component.html',
  styleUrls: ['./request-promotion.component.css']
})
export class RequestPromotionComponent implements OnInit {
  addRequestPromotionObj = new RequestPromotion();
  requestpro:RequestPromotion[];
  department:Department[];
  // requestPromotion: FormGroup;
  
  constructor(private reqProService:RequestPromotionService) {
    // this.requestPromotion = new FormGroup({
    //   'usrid': new FormControl('',Validators.required),
    //   'desigId': new FormControl(''),
    //   'recomby': new FormControl(''),
    //   'proremark': new FormControl('')
    // })
  }

  ngOnInit() {
  }
  addRequestPromotion() {
    this.reqProService.postPromotionRequest(this.addRequestPromotionObj).subscribe(addpro => {
      console.log(addpro);
    });
  }

  getDepartment() {
    this.reqProService.getAllDepartment().subscribe(data => { 
      this.department = data;
      console.log(data);
    });
  }


}
