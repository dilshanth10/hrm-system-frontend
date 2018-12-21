import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-persons-info',
  templateUrl: './persons-info.component.html',
  styleUrls: ['./persons-info.component.css']
})
export class PersonsInfoComponent implements OnInit {

  role="";
  rt="employee";

 

 
  constructor(private route:ActivatedRoute,private token: TokenStorageService) { }
info:any
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
      
    };

    this.route.paramMap.subscribe((params:ParamMap)=>{
      // alert(params.get('id'))
    })
    
    if(this.rt=="employee"){
      this.role="employee";
       }else if(this.rt=="trainee"){
         this.role="trainee";
       }
  }
}
