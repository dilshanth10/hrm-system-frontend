import { Holiday } from './../../../../models/leave-management/holiday';
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
  info:any;
  role: string;
  user:string;

  constructor(
    private holidayCalendarService: HolidayCalendarService,
    private token: TokenStorageService,
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.user = this.info.username;
  }

  postEvent() {
    this.holidayCalendarService.addEvent(this.holiday).subscribe(data =>{
      console.log(data);
    })
  }


}
