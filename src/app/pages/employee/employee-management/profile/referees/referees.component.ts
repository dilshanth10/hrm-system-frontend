import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referees } from './referees';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css']
})
export class RefereesComponent implements OnInit {

  referees: Referees[] = [
    {
      name: 'John Smith',
      email: 'johnsmith11@gmail',
      contactNo: '0775425654',
      address: 'Jaffna',
      relation:'uncle',
      head:'Referee 1'
    },
    {
      name: ' Smith',
      email: 'smith11@gmail',
      contactNo: '0774545455',
      address: 'Jaffna',
      relation:'Friend',
      head:'Referee 2'
    }
  ]
  

  ngOnInit() {
  }
  constructor(private router:Router) { }

  
  gotoNext(){
    this.router.navigate(['/profile/rolesAndResponse']);
  }
  goBack(){
    this.router.navigate(['/profile/recordEmp']);
  }

}
