import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  @Input()
   role:string;
 

  constructor() { }

  ngOnInit() {
  }

}
