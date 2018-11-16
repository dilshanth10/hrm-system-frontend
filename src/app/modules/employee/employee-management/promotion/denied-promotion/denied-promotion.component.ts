import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-denied-promotion',
  templateUrl: './denied-promotion.component.html',
  styleUrls: ['./denied-promotion.component.css']
})
export class DeniedPromotionComponent implements OnInit {

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
