import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-denied-promotion',
  templateUrl: './add-denied-promotion.component.html',
  styleUrls: ['./add-denied-promotion.component.css']
})
export class AddDeniedPromotionComponent implements OnInit {
  deniedpromation: FormGroup;
  constructor() {
  this.deniedpromation = new FormGroup({
    'empId': new FormControl,
    'empname': new FormControl,
    'positionname': new FormControl,
    'denieddate': new FormControl,
    'Deniedremark': new FormControl,
    
  })
  }

  ngOnInit() {
  }

}
