import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-profile-trainer-info',
  templateUrl: './profile-trainer-info.component.html',
  styleUrls: ['./profile-trainer-info.component.css']
})
export class ProfileTrainerInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private token: TokenStorageService,
    private interactionSer:InteractionService) { }
  
  info:any
    ngOnInit() {
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
        
      };
      this.getRoleRoute();
      this.userrole;
    }
    userrole:string
    getRoleRoute(){
      this.interactionSer.profileObservable$.subscribe(data=>{
        this.userrole=data
        console.log(this.userrole)
      })
  
    }
  }
  
