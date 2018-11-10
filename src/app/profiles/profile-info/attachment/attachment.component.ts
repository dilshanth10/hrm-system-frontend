import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css']
})
export class AttachmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  previous() {
    this.router.navigate(['/profile/referees']);
  }
}
