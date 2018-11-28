import { Component, OnInit } from '@angular/core';
import { AddPromotion } from '../../../models/add-promotion';
import { AddPromotionService } from '../../../Services/add-promotion.service';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-promotion-history',
  templateUrl: './edit-promotion-history.component.html',
  styleUrls: ['./edit-promotion-history.component.css']
})
export class EditPromotionHistoryComponent implements OnInit {
  promotionView:AddPromotion=new AddPromotion();
  msg: any;
 // editpromotionhistory: FormGroup;
  constructor(private addPromotionService: AddPromotionService) {
    //this.editpromotionhistory = new FormGroup({
      // 'proId':new FormControl,
      // 'reqId': new FormControl,
      // 'resigId': new FormControl,
      // 'positionname': new FormControl,
      // 'promoteddate': new FormControl,
      // 'salary': new FormControl,
      // 'promotionremark': new FormControl,
      // 'proBy':new FormControl
    
  }

  ngOnInit() {
  }
  
  editStatus(pro) {
    this.promotionView = Object.assign({}, pro);
  }

  updateUserById() {
    this.addPromotionService.editPromotion(this.promotionView).subscribe(data => {
      // alert("User updated"); 
    });
  }

}
