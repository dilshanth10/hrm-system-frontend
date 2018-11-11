import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating-star-comp',
  templateUrl: './rating-star-comp.component.html',
  styleUrls: ['./rating-star-comp.component.css']
})
export class RatingStarCompComponent implements OnInit {

  @Input('rating') rating:number;
  constructor() { }

  ngOnInit() {
   
  }



}
