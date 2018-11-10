import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment-profile-attachment',
  templateUrl: './new-appointment-profile-attachment.component.html',
  styleUrls: ['./new-appointment-profile-attachment.component.css']
})
export class NewAppointmentProfileAttachmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Previous(){
    this.router.navigate(['/appointment/appointmentAdd/referees']);
  }

}
