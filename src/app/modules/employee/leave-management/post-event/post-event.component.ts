import { ColorsService } from './../../../../services/leave-management/colors.service';
import { Holiday, Colors } from './../../../../models/leave-management/holiday';
import { HolidayCalendarService } from './../../../../services/leave-management/holiday-calendar.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.css']
})
export class PostEventComponent implements OnInit {

  holiday: Holiday = new Holiday();
  colors: Colors[];
  info:any;
  role: string;
  user:string;

  checked = false;


  constructor(
    private holidayCalendarService: HolidayCalendarService,
    private token: TokenStorageService,
    private colorsService :ColorsService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.user = this.info.username;
    this.getColors();    
  }

  postEvent() {
    this.holidayCalendarService.addEvent(this.holiday).subscribe(data =>{
      console.log(data);
    })
  }

  getColors() {
    this.holiday.postedBy = this.user;
    this.colorsService.getAllColors().subscribe(data =>{
      this.colors = data;
    })
  }
onClicked(evt) {  
  evt.checked ? this.checked = true : this.checked = false;
    console.log(this.checked);  
}
}
