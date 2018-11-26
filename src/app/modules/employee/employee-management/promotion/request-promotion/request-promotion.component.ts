import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlDirective, Validators } from '@angular/forms';
import { RequestPromotion } from 'src/app/models/promotion/request-promotion.model';
import { RequestPromotionService } from 'src/app/services/promotion/request-promotion.service';

@Component({
  selector: 'app-request-promotion',
  templateUrl: './request-promotion.component.html',
  styleUrls: ['./request-promotion.component.css']
})
export class RequestPromotionComponent implements OnInit {
  addRequestPromotionObj = new RequestPromotion();
  requestpro:RequestPromotion[];
  requestPromotion: FormGroup;
  
  constructor(private reqProService:RequestPromotionService) {
    this.requestPromotion = new FormGroup({
      'usrid': new FormControl('',Validators.required),
      'desigId': new FormControl(''),
      'recomby': new FormControl(''),
      'proremark': new FormControl('')
    })
  }

  ngOnInit() {
  }
  addRequestPromotion() {
    this.reqProService.postPromotionRequest(this.requestPromotion).subscribe(addpro => {
      console.log(this.requestPromotion.value);
    });
  }
}
